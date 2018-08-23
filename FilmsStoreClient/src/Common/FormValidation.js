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
