const ejs = require("ejs");
const path = require('path');

async function getSimulador(req, res) {
  console.log(path.join(__dirname, '../views/index.html'));
  res.sendFile(path.join(__dirname, '../views/index.html'));
}

module.exports = {
  getSimulador
}