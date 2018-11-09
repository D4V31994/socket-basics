var socket = io();

socket.on('connect', function() {
	console.log('Connected to socket.io server!');
});

socket.on('message', function(message) {
	var momentTimestamp = moment.utc(message.timestamp);
	console.log('New message:');
	console.log(message.text);

	jQuery('.messages').append('<p><strong>' + momentTimestamp.local().format('h:mm a') + ': </strong>' + message.text + '</p>');
});

// Handles submitting of new message.
var $form = jQuery('#message-form'); //when selecting id, put # in front of it

$form.on('submit', function(event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]'); //replaces content of input

	socket.emit('message', {
		text: $message.val()
	});

	$message.val(''); //what comes up after the input, empty string makes it blank.
});