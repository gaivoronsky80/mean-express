var express = require("express");
//

var app = express();
var bodyParser = require('body-parser');
var session = require('express-session')
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extend: true}));
app.get("/", function (request, response){
    response.render('index');
})
app.post("/process", function (request, response){
	console.log("here")
	console.log(request);
	request.session.name = request.body.name;
	request.session.location = request.body.location;
	request.session.language = request.body.language;
	request.session.comment = request.body.comment;
    response.redirect('result');
})
app.get("/result", function (request, response){
    response.render('result',{user: request.session});
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})