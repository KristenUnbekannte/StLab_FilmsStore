export default styles => ({
	card: {
		display: 'flex',
		justifyContent: 'space-around',
		marginBottom: 10,
		width: 250,
		border: '1px solid gray',
		boxShadow: '1px 1px 10px black',
		borderRadius: 20,
	},
	cover: {
		width: 220,
		height: 130,
	},
	buttonContainer: {
		display: 'flex',
		flexDirection: 'column',
		paddingBottom: 5,
	},
	button: {
		minWidth: 0,
		padding: 4,
	},
});
