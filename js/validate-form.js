/**
 * Simple form validation to check that each field has a value, at leaast one check box is checked, and
 * email follows a standard format.
 * @deprecated Since version 1.0.1
 */
function formVal() {
    var check = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\b/;
    var form = document.getElementById("resume-form");

    if (form.firstName.value == "" || form.lastName.value == "" || form.companyName.value == "" || form.email.value == "") {
        alert("Please fill out the entire form.");
        return false;
    }
    else if (form.resume.checked == false && form.references.checked == false && form.workHistory.checked == false) {
        alert("Please choose at least one of the following boxes");
        return false;
    }
    else if (!check.test(form.email.value)) {
        alert("Please enter a valid email address.");
        return false;
    }

}

/**
 * Listens for the submit button before executing
 */
$('#btn1').click(
    /**
     * Simple form validation to check that each field has a value, at leaast one check box is checked, and
     * email follows a standard format.
     * The only difference is trying to use jQuery to do the same thing.
     * @returns {boolean}
     */
    function(){
    var check = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\b/;
    if ($('#firstName').val() == "" || $('#lastName').val() == "" || $('#companyName').val() == "") {
        alert("Please fill out the entire form.");
        return false;
    }
    else if (!$('#resume').is(':checked') && !$('#references').is(':checked') && !$('#workHistory').is(':checked')) {
        alert("Please choose at least one of the following boxes");
        return false;
    }
    else if (!check.test($('#email').val())) {
        alert("Please enter a valid email address.");
        return false;
    }
});





