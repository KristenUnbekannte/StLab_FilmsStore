export default styles => ({
	error: {
		marginBottom: 15,
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		maxWidth: 940,
		padding: 10,
		margin: 'auto',
	},
	input: {
		width: 500,
		marginBottom: 10,
		'&:after': {
			borderBottomColor: '3f51b5',
		},
	},
	button: {
		width: '100%',
	},
	image: {
		width: 340,
		maxHeight: 520,
		border: '2px solid orange',
	},
	form: {
		width: 500,
		marginLeft: 10,
	},
});
