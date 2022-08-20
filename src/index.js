// start nodejs server
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
app.set("view engine", "ejs");

require("./routes/simuladorRoute")(app);

app.listen(3000, () => {
  console.log("Server started on port 3000");
})