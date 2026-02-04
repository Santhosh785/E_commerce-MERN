const express = require('express');
const cookiesParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require("./routes")


const app = express();   // Creating express app

app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials: true
}));   
 
    // Enabling CORS
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cookiesParser()); // Middleware to parse cookies

app.use("/api",router)


const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});