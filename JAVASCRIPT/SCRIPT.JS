function submite() {
    var name, email, msg;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    msg = document.getElementById("message").value;
    if (name != "" && email != "" && msg != "") {
        alert("Thank You.\nYour message has been successfully submitted.");
    }
}

function ref1() {
    var ref1 = document.getElementById("ref1");
    var ref2 = document.getElementById("ref2");
    var ref3 = document.getElementById("ref3");
    var ref4 = document.getElementById("ref4");
    var ref5 = document.getElementById("ref5");
    if (ref1.style.display === "none") {
        ref1.style.display = "block";
        ref2.style.display = "none";
        ref3.style.display = "none";
        ref4.style.display = "none";
        ref5.style.display = "none";

    } else {
        ref1.style.display = "block";
        ref2.style.display = "none";
        ref3.style.display = "none";
        ref4.style.display = "none";
        ref5.style.display = "none";
    }
}

function ref2() {
    var ref1 = document.getElementById("ref1");
    var ref2 = document.getElementById("ref2");
    var ref3 = document.getElementById("ref3");
    var ref4 = document.getElementById("ref4");
    var ref5 = document.getElementById("ref5");
    if (ref2.style.display === "none") {
        ref2.style.display = "block";
        ref1.style.display = "none";
        ref3.style.display = "none";
        ref4.style.display = "none";
        ref5.style.display = "none";
    } else {
        ref2.style.display = "block";
        ref1.style.display = "none";
        ref3.style.display = "none";
        ref4.style.display = "none";
        ref5.style.display = "none";
    }
}

function ref3(){
    var ref1 = document.getElementById("ref1");
    var ref2 = document.getElementById("ref2");
    var ref3 = document.getElementById("ref3");
    var ref4 = document.getElementById("ref4");
    var ref5 = document.getElementById("ref5");
    if (ref3.style.display === "none") {
        ref3.style.display = "block";
        ref1.style.display = "none";
        ref2.style.display = "none";
        ref4.style.display = "none";
        ref5.style.display = "none";
    } else {
        ref3.style.display = "block";
        ref1.style.display = "none";
        ref2.style.display = "none";
        ref4.style.display = "none";
        ref5.style.display = "none";
    }
}
function ref4(){
    var ref1 = document.getElementById("ref1");
    var ref2 = document.getElementById("ref2");
    var ref3 = document.getElementById("ref3");
    var ref4 = document.getElementById("ref4");
    var ref5 = document.getElementById("ref5");
    if (ref4.style.display === "none") {
        ref4.style.display = "block";
        ref1.style.display = "none";
        ref2.style.display = "none";
        ref3.style.display = "none";
        ref5.style.display = "none";
    } else {
        ref4.style.display = "block";
        ref1.style.display = "none";
        ref2.style.display = "none";
        ref3.style.display = "none";
        ref5.style.display = "none";
    }
}
function ref5(){
    var ref1 = document.getElementById("ref1");
    var ref2 = document.getElementById("ref2");
    var ref3 = document.getElementById("ref3");
    var ref4 = document.getElementById("ref4");
    var ref5 = document.getElementById("ref5");
    if (ref5.style.display === "none") {
        ref5.style.display = "block";
        ref1.style.display = "none";
        ref2.style.display = "none";
        ref3.style.display = "none";
        ref4.style.display = "none";
    } else {
        ref5.style.display = "block";
        ref1.style.display = "none";
        ref2.style.display = "none";
        ref3.style.display = "none";
        ref4.style.display = "none";
    }
}
