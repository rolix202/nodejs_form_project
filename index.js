import express from "express";
import bodyParser from "body-parser";

import formRoute from "./routes/formRoute.js"

const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))

app.use("/", formRoute)

app.listen(8080, () => {
    console.log("Server started on port 8080");
})
