import { Client } from 'node-appwrite'
import { Functions } from 'node-appwrite'

export default async ({ res, res, log, error }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(req.headers['X-Suite-Key'] ?? '')

  const functions = new Functions(client)

  if (req.path === '/v1/functions') {
    if (req.method === 'GET') {
      try {
        const reponse = await functions.list()
        log(`Functions: ${ response.functions }`)
        return res.text(response.functions)
      } catch (err) {
        error('Could not list users: ' + err.message)
      }
    }
  }
}



// import { Client } from 'node-appwrite'
// import { Users } from 'node-appwrite'

// export default async ({ req, res, log, error }) => {
//   const client = new Client()
//     .setEndpoint(process.env.APPWRITE_ENDPOINT)
//     .setProject(process.env.APPWRITE_PROJECT)
//     .setKey(req.headers['X-Suite-Key'] ?? '')

//   const users = new Users(client)

//   try {
//     const response = await users.list()
//     log(`Total users: ${ response.total }`)
//   } catch(err) {
//     error('Could not list users: ' + err.message)
//   }

//   if (req.path === '/ping') {
//     return res.text('Pong')
//   }

//   return res.json({
//     motto: 'Build like a team of hundreds_',
//     learn: 'https://appwrite.io/docs',
//     connect: 'https://appwrite.io/discord',
//     getInspired: 'https://builtwith.appwrite.io'
//   })
// }
