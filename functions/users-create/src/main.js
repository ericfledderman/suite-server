import { Client } from 'node-appwrite'
import { ID } from 'node-appwrite'
import { Users } from 'node-appwrite'

export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_KEY)

  const users = new Users(client)

  try {
    const response = await users.create(
      ID.unique(),
      req.body.email,
      req.body.password
    )
    log(response)
    return res.json({
      data: response
    })
  } catch (err) {
    error('Could not register user: ' + err.message)
    return res.json({
      error: err.message
    })
  }
}
