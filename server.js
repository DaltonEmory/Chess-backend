const express = require('express');
const cors = require('cors');

// Initialize the app
const app = express();

// Enable CORS
app.use(cors());

// Sample chess openings
const openings = [
    { id: 1, name: 'Ruy Lopez', moves: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5'] },
    { id: 2, name: 'Sicilian Defense', moves: ['e2e4', 'c7c5'] },
    { id: 3, name: 'French Defense', moves: ['e2e4', 'e7e6'] },
];

// Root route (for debugging)
app.get('/', (req, res) => {
    res.send('Welcome to the Chess Backend!');
});

// Endpoint to fetch openings
app.get('/api/openings', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(openings);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});