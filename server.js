/*Name: Sanjida Afrin

*/

const express = require("express");
const path = require("path");
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

//app's home page
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.use(express.static("."));

app.listen(HTTP_PORT, () => {
  console.log("Ready to handle requests on port " + HTTP_PORT);
});

app.use((req, res)=>{
    res.status(404).send("Resource not found");
});

//resource available in this web api

app.get("/api", (req, res)=>{

    const links = [];
        const linkObject = {
        "apiName": "Student Attendence System",
        "apiDescription" : "An app taking student attendance",
        "apiVersion" : "1.0",
        "apiAuthor" : "Sanjida Afrin",
        "links" : links
    };
    res.json(linkObject);
});

