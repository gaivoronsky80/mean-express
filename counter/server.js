var express = require("express");
console.log(express);

var app = express();
var bodyParser = require('body-parser');
var session = require('express-session')
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

console.log(app);
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function (request, response){
	if(request.session.counter > 0){
		request.session.counter ++;
	}
	else{
		request.session.counter = 1;
	}
    response.render('index',{ counter: request.session.counter });
})

app.post("/plus_2", function (request, response){
	request.session.counter ++;
    response.redirect('/');
})

app.post("/reset", function (request, response){
	request.session.counter = 0;
    response.redirect('/');
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})