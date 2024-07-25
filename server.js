
const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 5000; // Use environment variable for port, default to 5000

// Connect to MongoDB
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/users');
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Basic Route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});