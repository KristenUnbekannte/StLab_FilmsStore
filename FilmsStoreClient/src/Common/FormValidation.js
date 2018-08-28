export const validatePassword = password => {
	return !password || password.length < 6
		? 'Field must contain at least 6 characters'
		: undefined;
};

export const validateUserName = userName => {
	return userName ? undefined : 'Field must not be empty';
};

export const validateMatchPassword = (password, allInputs) => {
	return password === allInputs.password
		? undefined
		: 'Password does not match';
};

export const validateYear = year => {
	const currentYear = new Date().getFullYear();
	return year > 1888 && year < currentYear + 2
		? undefined
		: 'Field is incorrect';
};
