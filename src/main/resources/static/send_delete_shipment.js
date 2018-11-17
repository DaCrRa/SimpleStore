var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "http://code.jquery.com/jquery-3.3.1.min.js";

head.appendChild(script)

function sendDeleteShipment(id) {
	$.ajax({
		type: 'DELETE',
		url: '/shipment/' + id,
		success: function(response) {
			window.location.href = "/";
		}
	});
}
