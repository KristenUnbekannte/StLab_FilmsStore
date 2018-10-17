export default styles => ({
	container: {
		maxWidth: 1040,
		margin: 'auto',
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
	},
	card: {
		display: 'flex',
		justifyContent: 'space-around',
		marginBottom: 10,
		width: 250,
		border: '1px solid gray',
		boxShadow: '1px 1px 10px black',
		borderRadius: 20,
	},
	progress: {
		marginTop: 100,
		textAlign: 'center',
	},
});
