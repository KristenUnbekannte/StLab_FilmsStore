import TokenService from '../Services/TokenService';

export default header => ({
	'Content-Type': 'application/json',
	Authorization: `Bearer ${TokenService.getToken()}`,
});
