function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
};

function postToGoogle() {
    var name = $j('#firstname').val();
	var name = $j('#lastname').val();
    var email = $j('#email').val();
    if ((name !== "") && (email !== "") && ((feed !== "") && (validateEmail(email)))) {
        $j.ajax({
            url: "https://goo.gl/forms/RdO948g8JVgBTV8b2",
            data: {"entry.1" : firstname, "entry.2" : lastname, "entry.2" : email},
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function (){

                    $j('#firstname').val("");
					$j('#lastname').val("");
                    $j('#email').val("");
                    //Success message
                },
                200: function (){
					$j('#firstname').val("");
					$j('#lastname').val("");
                    $j('#email').val("");
                    //Success Message
                }
            }
        });
    }
    else {
        //Error message
    }
};
