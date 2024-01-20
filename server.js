const express = require("express");
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.listen(PORT, () => {
  console.log("Server running");
});