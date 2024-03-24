const express = require('express');
const mongoose = require('mongoose');

// Database Connection
let URI = "mongodb://localhost:27017/BMS";

mongoose.connect(URI).then((res)=>{
    console.log("Successfully connected mongoose")
}).catch((err)=>{
    console.log(err)
})

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
