// SCROLLFIRE

function scroll() {
    var t = window.scrollY;
	var para = document.getElementById("para");
	var m = -0.25;
	var b = 0;

	var newY = m*t + b;
	para.style.backgroundPositionY = newY + "px";
	
	var msg1 = document.getElementById("msg1");
	var msg2 = document.getElementById("msg2");
	var msg3 = document.getElementById("msg3");
	if (t > 1500) {
		msg1.style.marginLeft = "0px";
	}
	if (t > 1650) {
		msg2.style.marginLeft = "0px";
	}
	if (t > 1800) {
		msg3.style.marginLeft = "0px";
	}
}

// FORM REG

// Name
function checkName() {
	var nameBox = document.getElementById("name");
	var name = nameBox.value;
	
	var pattern = /^[a-zA-Z]+$/;
	
	if ( name.length > 3 && pattern.test(name)) {
		// Name is too short.
		nameBox.style.borderColor = "green";
	} else {
		// Name is long enough.
		nameBox.style.borderColor = "red";
	}
}

// Email
function checkEmail() {
	var emailBox = document.getElementById("email");
	var email = emailBox.value;
	
	var pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
	
	if (pattern.test(email)) {
		// Email is valid.
		emailBox.style.borderColor = "green";
	} else {
		// Email NOT valid.
		emailBox.style.borderColor = "red";
	}
}

//Reason
function updateReason() {
            var ReasonStatus = document.getElementById("prodinfo");
            var prodidLabel = document.getElementById("prodidLabel");
            var prodidBox = document.getElementById("prodid");
            
            if (ReasonStatus.checked) {
                prodidLabel.className = "visibile";
                prodidBox.className = "visible";
            } else {
                prodidLabel.className = "hidden";
                prodidBox.className = "hidden";
            }
        }

function checkMessage() {
	var messageBox = document.getElementById("message");
	var message = messageBox.value;

	if (message.length < 10 || message.length > 33) {
		// Valid.
		messageBox.style.borderColor = "red";

	} else {
		// Invalid.
		messageBox.style.borderColor = "green";

	}
}


