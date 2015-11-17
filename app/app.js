// Import app dependancies
var express = require('express'); // framework we will use for the webapp
var socketio = require('socket.io'); // framework we will use to handle websockets
var http = require('http'); // needed to server our webapp
var request = require('request'); // library that makes http requests easier

// initialize express
var app = express();
app.use(express.static('public')); // make files in /public available

// serves our app
var http_server = http.Server(app);


// respond with index.html when a user performs a get request at '/'
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

// have our HTTP server listen for requests on port 8080
http_server.listen(8080, function() {
	console.log('listening on *:8080');
});
