var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'todo'
});
var port = 3000;

// 建立DB table
var createDBTable = (dbConn) => {

	dbConn.query('SELECT * FROM todo', (error, rows) => {
        if (error) {
            dbConn.query('CREATE TABLE `todo`.`todo` (`id` INT NOT NULL AUTO_INCREMENT,' +
            	'`title` VARCHAR(45) NULL,' + 
            	'`status` INT NULL,' + 
            	'`accountId` VARCHAR(45) NULL,' +
            	'PRIMARY KEY (`id`));', (createError) => {
            	if (createError) {
            		console.log('create database table fail!');
            	}
            });
        }
    });
};

conn.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
    	console.log('connecting success');
    	createDBTable(conn);
	}
});


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// db state
app.use((req, res, next) => {
    req.con = conn;
    next();
});

/*
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});
*/

// Create
app.post('/api/todos', (req, res) => {
	var db = req.con;
    var accountId = req.query.accountId || '';
    var title = req.body.title || '';
    var status = req.body.status || 0;

    console.log(req.query);
    console.log(req.body);

    if (title && accountId) {

	    db.query("INSERT INTO todo (title, status, accountId) VALUES (" + 
	    	"'" + title + "', '" + status + "', '" + accountId + "');"
	    	, function(err, row) {
	        if (err) {
	            res.send(err);
	        }
	        else {

	        	console.log(row);

	        	res.json({});
	    	}
	    });
	}
	else {
		res.json({
			message: 'data is empty',
            error: {}
        });
	}
});

// Read
app.get('/api/todos', (req, res) => {
	var db = req.con;
    var accoountId = req.query.accountId || '';

    db.query('SELECT * FROM todo WHERE accountId="' + accoountId + '"', function(err, rows) {
        if (err) {
            res.send(err);
        }
        else {
        	res.json(rows);
    	}
    });

});

// Delete
/*
app.delete('/api/todos/:todo_id', (req, res) => {
    Todo.remove({
        _id : req.params.todo_id
    }, function(err, todo) {
        if (err)
            res.send(err);
        
        Todo.find(function(err, todos) {
            if (err) {
                res.send(err);
            }
            res.json(todos);
        });
    });
});
*/

app.listen(port);
console.log("App listening on port " + port);