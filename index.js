const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Version 2 - CI/CD Works!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});