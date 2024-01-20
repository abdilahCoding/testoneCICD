const express = require("express");
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('heloo world')
})
app.get('/user', (req, res) => {
  res.send('heloo users')
})

app.listen(PORT, () => {
  console.log("Server running");
});