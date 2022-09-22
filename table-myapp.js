var express = require('express');
var path = require('path');

var db=require('./dbConfig');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res) {
		res.render("home");
});
	
app.get('/getCompany', function(req, res){
	db.query("SELECT * FROM company", function (err, result) {
		if (err) throw err;
		console.log(result);
		res.render('getCompany', { title: 'Company Details', companyData: result});
	});
});

app.get('/getEmployee', function(req, res){
	db.query("SELECT employee.id, employee.name, employee.position, employee.wage, " +
			" employee.company_id, company.company_name FROM employee " +
			" INNER JOIN company ON employee.company_id=company.id", function (err, result) {
		if (err) throw err;
		console.log(result);
		res.render('getEmployee', { title: 'Employee Details', employeeData: result});
	});
});

app.get('/getEmployee/:employeeId',  (req, res, next)=>{
	db.query("SELECT * FROM employee WHERE id='"+req.params.employeeId+"'", function (err, result) {
		if (err) throw err;
		console.log(result);
		res.render('getEmployee', { title: 'Employee Details', employeeData: result});
	});
 });
 
app.get('/getCompanyEmployee/:companyId',  (req, res, next)=>{
	db.query("SELECT * FROM employee WHERE company_id='"+req.params.companyId+"'", function (err, result) {
		if (err) throw err;
		console.log(result);
		res.render('getCompanyEmployee', { title: 'Employee Details', employeeData: result});
	});
 });
 
 
 app.get('/addEmployees', function(req, res, next) {
	res.render('addEmployees', { title: 'Add Employees' });
});

app.post('/addEmployees', function(req, res, next) {
	var name = req.body.name;
	var position = req.body.position;
	var company_id = req.body.company_id;
	var wage = req.body.wage;
	var sql = `INSERT INTO employee (name, position, wage, company_id) VALUES ("${name}", "${position}", "${wage}", "${company_id}")`;
	db.query(sql, function(err, result) {
		if (err) throw err;
		console.log('record inserted');
		res.render('addEmployees');
	});
});

app.listen(3000);
console.log('Node app is running on port 3000');

