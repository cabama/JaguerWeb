

$(document).ready(function (argument) {
	

	$('#ingresar').click(function(){
		var user = ('#user').val();
		var pass = ('#pass').val();

		$.ajax({
			url: '/login',
			method: 'post',
			data: {user: user, pass: pass},
			cache: false

		});

	});





});