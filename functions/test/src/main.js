import express from 'express'

const api = express()
const port = 3000

api.use(express.json())

api.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express on Appwrite Functions!' })
})

export default async (req, res) => {
  if (req.url === '/api/hello' && req.method === 'GET') {
    res.json({ mesage: 'Hello from Express on Appwrite Functions!' })
  } else {
    res.json({ error: 'Not Found' })
  }
}
