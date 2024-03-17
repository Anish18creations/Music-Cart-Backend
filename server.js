const express = require('express');
require("dotenv").config();
const db = require('./config/databaseconnect');
//creating a server
const app = express();
const authRoutes = require("./routes/userauth");
const musicRoutes = require("./routes/music");
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use("/api/v1/auth" , authRoutes);
//app.use("/api/v1/music",musicRoutes);

app.get("/checkup" , (req,res)=>{
    res.json({
        service : "Music Cart Application backend server",
        status : "Active",
        time : new Date(),
    })
})

const PORT = process.env.PORT || 6000;
app.listen(PORT , ()=>{
    console.log(`Server is up and running at PORT ${PORT}`);
})