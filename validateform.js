function formVal() {
    var check = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\b/;
    var vform = document.getElementById("resumeform");

    if (vform.firstname.value == "" || vform.lastname.value == "" || vform.companyname.value == "" || vform.email.value == "") {
        alert("Please fill out the entire form.");
        return false;
    }
    else if (vform.contactrequest.checked == false && vform.resume.checked == false && vform.references.checked == false && vform.workhistory.checked == false) {
        alert("Please choose at least one of the following boxes");
        return false;

    }
    else if (!check.test(vform.email.value)) {
        alert("Please enter a valid email address.");
        return false;
    }

}





