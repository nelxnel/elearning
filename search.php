<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Search</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>

<?php
	mysql_connect("localhost", "root", "") or die("Error connecting to database: ".mysql_error());
	/*
		localhost - it's location of the mysql server, usually localhost
		root - your username
		third is your password
		
		if connection fails it will stop loading the page and display an error
	*/
	
	mysql_select_db("db2") or die(mysql_error());
	/* tutorial_search is the name of database we've created */
	
	
	
?>



</body>
</html>