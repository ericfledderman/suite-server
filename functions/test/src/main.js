import express from 'express';

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define API routes
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express on Appwrite Functions!' });
});

app.post('/api/echo', (req, res) => {
    const { message } = req.body;
    res.json({ message: `You said: ${message}` });
});

// Export the function handler
export default async function (req, res) {
    app(req, res);  // Directly pass the request and response to Express
};
