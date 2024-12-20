const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Sample chess openings
const openings = [
    { id: 1, name: 'Ruy Lopez', moves: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5'] },
    { id: 2, name: 'Sicilian Defense', moves: ['e2e4', 'c7c5'] },
];

// API endpoint to fetch openings
app.get('/api/openings', (req, res) => {
    res.json(openings);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});