require("dotenv").config({ path: "./config/.env" })
const express = require("express")
const mongoose = require("mongoose")
const connect = require("./config/db")
const cors = require('cors')
const app = express()
connect()
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

// route
app.use("/user", require("./routes/userRoutes"))

mongoose.connection.once("open", () => {
    console.log("DB CONNECTED");
    app.listen(process.env.PORT | 5000, err => err
        ? console.log("COULD NOT START", err)
        : console.log("SERVER RUNNING")
    )
})
mongoose.connection.on("error", (err) => {
    console.log("mongo error", err);
})

