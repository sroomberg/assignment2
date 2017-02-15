

function validate(aForm) {
	var ret = '';
	
	var nameErr = validateName(aForm['name'].value);
	var phoneErr = validatePhone(aForm['phone'].value);

	ret += errorMsgName(nameErr);
	ret += '\n';
	ret += errorMsgPhone(phoneErr);

	var success = (nameErr + phoneErr == 0);
	if (success) {
		aForm.innerHTML = '<p>SUCCESS</p>';
	}
	else {
		alert(ret);
	}
	
	return false;
}

function validateName(aString) {
	var ret = 0;
	if (aString === '' || aString === undefined) {
		return ++ret; // no input provided
	}
	if (/\d/.test(aString)) {
		ret++; // numbers in name
	}
	return ret;
}

function errorMsgName(nameErrs) {
	if (nameErrs > 0) {
		return 'INVALID NAME';
	}
	return '';
}

function validatePhone(aNumber) {
	var ret = 0;
	if (aNumber === '' || aNumber === undefined) {
		return ++ret; // no input provided
	}
	if (/[a-z]/i.test(aNumber)) {
		ret++;	// letters in phone number
	}
	return ret;
}

function errorMsgPhone(phoneErrs) {
	if (phoneErrs > 0) {
		return 'INVALID PHONE';
	}
	return '';
}