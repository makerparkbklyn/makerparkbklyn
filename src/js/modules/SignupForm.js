import $ from 'jquery'

let request

const submitForm = (event) => {
	// Prevent default posting of form
	event.preventDefault()
	event.stopImmediatePropagation()

	if (request) {
		request.abort()
	}

	let $form = $(event.target),
		$inputs = $form.find('input'),
		serializedData = $form.serialize()

	$inputs.push($form.find('textarea'))

	// disable inputs for duration of request
	// disable AFTER form is serialized
	$inputs.prop('disabled', true)

	request = $.ajax({
		type: 'post',
		url: 'https://script.google.com/macros/s/AKfycbzsB-_IGXZppw_Krs5XTSSukl4H5nDaK68NdiHfWcRlNFtMyEo/exec',
		data: serializedData
	})

	request.done( (res, status, jqXHR) => {
		console.log('Sign up form submitted')
		console.log(res)
		console.log(status)
		console.log(jqXHR)
		// do something to say form was successfully submitted
		$form.remove()
		$('.form-message').addClass('success')
	})

	request.fail( (jqXHR, status, error) => {
		// fix for Google's strange inability to handle Safari's OPTIONS request
		if (jqXHR.status === 0) {
			// do something to say form was successfully submitted
			$form.remove()
			$('.form-message').addClass('success')
		}
		// normal error behavior
		else {
			console.error('The following error occurred: ' + status, error)
		}
	})

	request.always(function () {
		// Reenable the inputs
		$inputs.prop('disabled', false)
	});

	return false
}

export default submitForm
