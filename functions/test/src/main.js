const express = require('express');
const app = express();
const { createServer } = require("http"); // Import Node.js http module

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

// Export the function to handle Appwrite HTTP events
module.exports = async function (req, res) {
    // Create a temporary server to handle the incoming request
    const server = createServer(app);
    
    // Dispatch the request to the Express app
    server.emit('request', req, res);
};
