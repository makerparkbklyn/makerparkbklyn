$(document).ready(function() {

	// Variable to hold request
	var request;

	// Bind to the submit event of our form
	$('#join-form').submit(function(event){

		// Abort any pending request
		if (request) {
			request.abort();
		}
		// setup some local variables
		var $form = $(this);

		// Let's select and cache all the fields
		var $inputs = $form.find("input");

		// Serialize the data in the form
		var serializedData = $form.serialize();

		// Let's disable the inputs for the duration of the Ajax request.
		// Note: we disable elements AFTER the form data has been serialized.
		// Disabled form elements will not be serialized.
		$inputs.prop("disabled", true);

		// Fire off the request to /form.php
		request = $.ajax({
			// matt's url: "https://script.google.com/macros/s/AKfycbzYtw3ii8QbglDAeM157b6tMEPfX1GbBD5fBxaAdRmOtBDpGaHr/exec",
			url: "https://script.google.com/macros/s/AKfycbzsB-_IGXZppw_Krs5XTSSukl4H5nDaK68NdiHfWcRlNFtMyEo/exec",
			type: "post",
			data: serializedData
		});

		// Callback handler that will be called on success
		request.done(function (response, textStatus, jqXHR){
			// Log a message to the console
			console.log("Hooray, it worked!");
			console.log(response);
			console.log(textStatus);
			console.log(jqXHR);
			$('.join-form').addClass('hidden');
			$('.join-intro').html('Thanks for signing up! Keep an eye out for news and updates.');
		});

		// Callback handler that will be called on failure
		request.fail(function (jqXHR, textStatus, errorThrown){
			// Log the error to the console
			console.error("The following error occurred: "+ textStatus, errorThrown);
		});

		// Callback handler that will be called regardless
		// if the request failed or succeeded
		request.always(function () {
			// Reenable the inputs
			$inputs.prop("disabled", false);
		});

		// Prevent default posting of form
		event.preventDefault();
	});
});