import { Client } from 'node-appwrite'
import { Users } from 'node-appwrite'

export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT)
    .setKey(req.headers['X-Suite-Key'] ?? '')

  const uers = new Users(client)

  try {
    const response = await users.list()
    log(`Total users: ${ response.totel }`)
  } catch(err) {
    error('Could not list users: ' + err.message
  }

  if (req.path === '/ping') {
    return res.text('Pong')
  }

  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io'
  })
}




// import { Client, Users } from 'node-appwrite';

// // This Appwrite function will be executed every time your function is triggered
// export default async ({ req, res, log, error }) => {
//   // You can use the Appwrite SDK to interact with other services
//   // For this example, we're using the Users service
//   const client = new Client()
//     .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
//     .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
//     .setKey(req.headers['x-appwrite-key'] ?? '');
//   const users = new Users(client);

//   try {
//     const response = await users.list();
//     // Log messages and errors to the Appwrite Console
//     // These logs won't be seen by your end users
//     log(`Total users: ${response.total}`);
//   } catch(err) {
//     error("Could not list users: " + err.message);
//   }

//   // The req object contains the request data
//   if (req.path === "/ping") {
//     // Use res object to respond with text(), json(), or binary()
//     // Don't forget to return a response!
//     return res.text("Pong");
//   }

//   return res.json({
//     motto: "Build like a team of hundreds_",
//     learn: "https://appwrite.io/docs",
//     connect: "https://appwrite.io/discord",
//     getInspired: "https://builtwith.appwrite.io",
//   });
// };
