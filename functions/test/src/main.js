import express from 'express';

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define API routes
app.get('/api/hello', (req, res) => {
    return res.json({ message: 'Hello from Express on Appwrite Functions!' });
});

app.post('/api/echo', (req, res) => {
    const { message } = req.body;
    return res.json({ message: `You said: ${message}` });
});

// Export the function handler without extra error handling
export default function (req, res) {
    // Directly handle the request with the Express app
    app(req, res);
}
