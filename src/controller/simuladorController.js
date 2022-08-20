const ejs = require("ejs");
const path = require('path');

async function getSimulador(req, res) {
  // Render page using renderFile method
  ejs.renderFile('./index.html', function(err, html) {
    if (err) {
      console.log(err);
    }
    res.send(html);
  });
}

module.exports = {
  getSimulador
}