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

app.get("/cats", function (request, response){
    response.render('cats');
})

app.get("/:name", function (request, response){
	console.log(request.params);
	var name = request.params.name;

	if(name == "michael"){
	var cats_array = [
    	{name: "Michael", favorite_food: "Spaghetti", age: "3", sleeping_spot: ["under the bed", "in a sunbeam"], img: "cat_1.jpg"}
    	]
    };
    if(name == "jay"){
	var cats_array = [
		{name: "Jay", favorite_food: "Brocolli", age: "2", sleeping_spot: ["under the chair", "in a bath"], img: "cat_2.jpg"}
		]
	};
	if(name == "brendan"){
		var cats_array = [ 
	    {name: "Brendan", favorite_food: "Chocolate", age: "1", sleeping_spot: ["in a sofa", "in a book shalf"], img: "cat_3.jpg"}
	    ]
   	};
    if(name == "andrew"){
	var cats_array = [ 
    	{name: "Andrew", favorite_food: "Milk", age: "4", sleeping_spot: ["in the box", "under the car"], img: "cat_4.jpg"}
    	]
    }
    response.render('details', {cat: cats_array});
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})