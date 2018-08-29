import deepOrange from '@material-ui/core/colors/deepOrange';

export default styles => ({
	card: {
		display: 'flex',
		justifyContent: 'space-around',
		marginBottom: 10,
		width: 320,
		border: '1px solid gray',
		boxShadow: '1px 1px 10px black',
		borderRadius: 20,
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
	button: {
		minWidth: 0,
		padding: 4,
	},
});
