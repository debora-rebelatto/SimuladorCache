const ejs = require("ejs");

async function getSimulador(req, res) {
  // Render page using renderFile method
  ejs.renderFile('./index.html', function(err, html) {
    if (err) {
      console.log(err);
    }
    res.sendFile(__dirname + '/index.html');

  });
}

module.exports = {
  getSimulador
}