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

// Directly export the handler function
export default async function (req, res) {
    // Manually handle the request with Express's router
    app.handle(req, res, (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!res.headersSent) {
            res.status(404).json({ error: 'Not Found' });
        }
    });
};
