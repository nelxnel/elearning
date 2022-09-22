var express = require ('express');
var path = require('path');
var app = express ();

var mysql = require('mysql');
var	connection = require('./dbConfig');

//ejs template
app.set('view engine', 'ejs');

//using app.use to serve up static CSS
app.use('/public', express.static('public'));

//this is for read POST data
app.use(express.json());

app.use(express.urlencoded({
	extended: true
}));

//All routing start here...

//index page

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res)  {
res.render("index");
})

//dbRead page displays the retrieved data in HTML table
app.get('/dbRead', function (req, res) {
	connection.query("SELECT * FROM users", function (err, result) {
		if (err) throw err;
		console.log(result);
		res.render('dbRead', { title: 'xyz', userData: result});
	});
	
});

//dbRead page displays the retrieved data in HTML table
app.get('/dbReadFancyb', function (req, res) {
	connection.query("SELECT * FROM users", function (err, result) {
		if (err) throw err;
		console.log(result);
		res.render('dbReadFancyb', { title: 'xyz', userData: result});
	});
	
});


//dbRead page displays the retrieved data in HTML table
app.get('/dbReadFancy', function (req, res) {
	connection.query("SELECT * FROM users", function (err, result) {
		if (err) throw err;
		console.log(result);
		res.render('dbReadFancy', { title: 'xyz', userData: result});
	});
	
});




//dbRead page displays the retrieved data in HTML table
app.get('/index', function (req, res) {
	connection.query("SELECT * FROM users", function (err, result) {
		if (err) throw err;
		console.log(result);
		res.render('index', { title: 'xyz', userData: result});
	});
	
});



// app.get('/index', function(req, res){
// 	db.query("SELECT * FROM users", function (err, result) {
// 		if (err) throw err;
// 		console.log(result);
// 		res.render('index', { title: 'User Details', companyData: result});
// 	});
// });

//when user inserts data in the HTML form
app.post('/', function(req, res){
	var abcd = req.body.id;
	var bcde = req.body.name;
	var xyz = req.body.email;
	console.log(req.body);
	var sql = `INSERT INTO users (id, name, email) VALUES ("${abcd}", "${bcde}", "${xyz}")`;
	connection.query(sql, function (err, result) {
		if (err) throw err;
		console.log("1 record inserted");
	});
	return res.render('index', { errormessage: 'insert data successfully'})
});


app.listen(process.env.port || 3000);
console.log('Running at Port 3000')