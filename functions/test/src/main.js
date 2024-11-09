import express from 'express';

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define API routes
app.get('/api/hello', (req, res) => {
    if (!res.headersSent) {
        res.json({ message: 'Hello from Express on Appwrite Functions!' });
    }
});

app.post('/api/echo', (req, res) => {
    const { message } = req.body;
    if (!res.headersSent) {
        res.json({ message: `You said: ${message}` });
    }
});

// Export the function handler for Appwrite
export default async function (req, res) {
    try {
        app.handle(req, res, (err) => {
            if (err && !res.headersSent) {
                res.status(500).json({ error: err.message });
            } else if (!res.headersSent) {
                res.status(404).json({ error: 'Not Found' });
            }
        });
    } catch (error) {
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};
