/**
 * Created by sagar patil on 31-05-17.
 */


$(function () {
	// A hover effect on the clocks and floating button.

	var clock = $('.clock');
	var bttn = $('.btn-floating');

	clock.on('mouseenter', function (e) {

		$(this).addClass('z-depth-3');

	});

	clock.on('mouseleave', function (e) {

		$(this).removeClass('z-depth-3');

	});

	bttn.on('mouseenter', function (e) {

	    $(this).addClass('z-depth-3');

    });

	bttn.on('mouseleave', function (e) {

        $(this).removeClass('z-depth-3');


    });


	// Prevent page refresh on pressing enter in the input fields.

	$('input').keydown(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			return false;
		}
	});

});

//function for deleting alarm from delete button
$(document).ready(function(c) {
    $('#alarm-delete').on('click', function(c){
        $('.alarm').fadeOut('slow', function(c){
            $('.alarm').remove();
        });
    });
});

