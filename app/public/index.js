var socket = socketio();

// handle username
var username = getCookie("username");
if (!username) {
	var tempUsername = "anon" + Math.floor((Math.random() * 1000) + 1);
	username = prompt("Please enter a user name!", tempUsername);
	setCookie('username', username, 7);
	//!!!Emit new user active
}
if (username)
	// emit new user active

// Handle receiving conversation history


// Handle receiving new message


// Handle sending messages
$('#messageForm').keypress(function() {
	// this piece allows us to submit when a user hit enter
	var keyCode = (event.keyCode ? event.keyCode : event.which);
	if ((event.keyCode || event.which) == 13) {
		// emit new message
	}
});

// Send search queries
$('#searchBar').keypress(function() {
	//this piece allows us to submit when a user hit enter
	var keyCode = (event.keyCode ? event.keyCode : event.which);
	if ((event.keyCode || event.which) == 13) {
		// emit search query
	}
});

// Handle search results


// Update the list of users when a new user enters the room


// want to tell the server we are leaving before we leave
$(window).bind('beforeunload', function() {
	// emit user leaving page event
});


/******************Welcome to the land of helper functions*********************/

// Helper function that updates the active users panel with a new list of users
function displayUsers(users) {
	$('#users').empty();
	for (var i = 0; i < users.length; i++) {
		$('#users').append('<p>' + users[i] + '</p>');
	}
}

// Helper function for displaying message
function displayMessage(message) {
	$('#messages').append(
		'<li>' + message.user + ': ' + message.text + '</li>'
	);
    var elem = document.getElementById('messages');
	elem.scrollTop = elem.scrollHeight;
}

// Helper function for displaying search results
function displaySearchResults(results) {
	$('#searchResults').empty();
	for (var i = 0; i < results.length; i++)
		$('#searchResults').append(
			'<p>' + results[i].user + ': ' + results[i].text + '</p>'
		);
}

// Helper function to help us send messages
function sendMessage() {
	// implement this function!
	return false;
}

// get the search request and send to server
function sendSearch() {
	//implement this function
}

// Helper function to set cookies. Shoutout to W3
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

// Helper function to get cookies. Shoutout to W3
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
	}
	return null;
}
