var express = require("express");
console.log(express);

var app = express();
console.log(app);
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function (request, response){
    response.render('index');
})

app.get("/cars", function (request, response){
    response.render('cars');
})

app.get("/cats", function (request, response){
    response.render('cats');
})

app.get("/cars/new", function (request, response){
    response.render('form_new_car');
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})