export default styles => ({
	root: {
		backgroundColor: 'black',
		marginBottom: 10,
		padding: '10px 5px',
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
	title: {
		textDecoration: 'none',
		color: 'lightgray',
		fontSize: 20,
		width: 110,
	},
	userName: {
		color: 'lightgray',
		fontSize: 18,
	},
	menuButton: {
		color: 'lightgray',
		height: 30,
	},
	input: {
		backgroundColor: 'lightgray',
		width: 150,
		borderRadius: 20,
		padding: '2px 10px'
	},
	form: {
		width: 215,
	},
	searchButton: {
		padding: 0,
		minWidth: 35,
		minHeight: 35,
		backgroundColor: 'lightgray',
		borderRadius: 20,
		margin: 'auto 5px',
		'&:hover': {
			backgroundColor: 'orange',
		},
	},
	searchContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		width: 330,
	},
	userContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
});
