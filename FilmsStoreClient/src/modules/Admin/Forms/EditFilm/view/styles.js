export default styles => ({
	editFilmContainer: {
		maxWidth: 900,
		margin: 'auto',
	},
	error: {
		marginBottom: 15,
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		padding: 10,
		marginBottom: 20,
		border: '1px solid gray',
		boxShadow: '1px 1px 10px black',
		borderRadius: 20,
	},
	input: {
		width: 400,
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
		border: '2px solid gray',
		borderRadius: 20,
	},
	form: {
		width: 420,
		marginLeft: 10,
	},
});
