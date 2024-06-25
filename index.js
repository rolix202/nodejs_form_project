import express from "express";
import bodyParser from "body-parser";

import formRoute from "./routes/formRoute.js"
import session from "express-session";

const app = express()

// Configure the session middleware
const sessionMiddleware = session({
    secret: 'your_secret_key', // Replace with any strong secret key of your choice
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})

app.use(sessionMiddleware)

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))

app.use("/", formRoute)

app.listen(8080, () => {
    console.log("Server started on port 8080");
})
