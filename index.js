// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

//route
app.get('/', (req, res) => {
    res.send('Welcome to Blog Management System');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
