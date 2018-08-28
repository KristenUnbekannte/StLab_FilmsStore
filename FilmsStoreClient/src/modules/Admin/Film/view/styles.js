import deepOrange from '@material-ui/core/colors/deepOrange';

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
		width: 320,
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: 200,
	},
	cover: {
		width: 100,
		height: 150,
	},
	orangeAvatar: {
		marginTop: 3,
		width: 25,
		height: 25,
		fontSize: 14,
		color: '#fff',
		backgroundColor: deepOrange[500],
	},
	starGold: {
		color: 'orange',
		fontSize: 28,
	},
	starsContainer: {
		width: 45,
		display: 'flex',
		justifyContent: 'space-between',
	},
	buttonContainer: {
		alignSelf: 'flex-end',
		paddingBottom: 5,
	},
	addButton: {
		alignSelf: 'center',
		margin: 10,
	},
	progress: {
		marginTop: 100,
		textAlign: 'center',
	},
	button: {
		minWidth: 0,
		padding: 4,
	},
});
