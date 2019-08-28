//imports
require("dotenv").config();
const express = require("express");
//controllers
const {searchForGame} = require("./controllers/giantBombController");
//server
const app = express();
//middleware
app.use(express.json());
//endpoints
app.get("/api/search/:searchTerm", searchForGame)
//listen
app.listen(5050, () => console.log(`Listening on Port 5050`));