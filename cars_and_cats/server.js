var express = require("express");
console.log(express);

var app = express();
console.log(app);
app.use(express.static(__dirname + "/static"));

app.listen(8000, function() {
  console.log("listening on port 8000");
})