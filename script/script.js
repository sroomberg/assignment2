

function validate(aForm) {
	var ret = '';
	
	nameErr = validateName(aForm.name);
	phoneErr = validatePhone(aForm.phone);
	messageErr = validateMsg(aForm.message);

	ret += (nameErr == 0 ? '' : errorMsgName(nameErr));
	ret += (phoneErr == 0 ? '' : errorMsgPhone(phoneErr));
	ret += (messageErr == 0 ? '' : errorMsgMessage(messageErr));

	return ((nameErr + phoneErr + messageErr == 0) ? 'SUCCESS' : ret);
}

function validateName(aString) {
	var ret = 0;
	if (aString == '' || aString == null) {
		return ++ret; // no input provided
	}
	if (/\d/.test(aString)) {
		ret++; // numbers in name
	}
	return ret;
}

function errorMsgName(nameErrs) {
	if (nameErrs == 1) {

	}
}

function validatePhone(aNumber) {
	var ret = 0;
	if (aNumber == '' || aNumber == null) {
		return ++ret; // no input provided
	}
	if (/[a-z]/i.test(aNumber)) {
		ret++;	// letters in phone number
	}
	return ret;
}

function errorMsgPhone(phoneErrs) {

}

function validateMsg(aString) {
	var ret = 0;
	if (aString == '' || aString == null) {
		return ++ret; // no input provided
	}
	return ret;
}

function errorMsgMessage(messageErrs) {

}