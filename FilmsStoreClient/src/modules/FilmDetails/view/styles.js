import deepOrange from '@material-ui/core/colors/deepOrange';

export default styles => ({
	body: {
		maxWidth: 710,
		margin: 'auto',
	},
	card: {
		padding: 10,
		maxWidth: 800,
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
	},
	details: {
		width: 360,
		display: 'flex',
	},
	cover: {
		width: 325,
		height: 500,
	},
	orangeAvatar: {
		width: 35,
		height: 35,
		fontSize: 16,
		color: '#fff',
		backgroundColor: deepOrange[500],
	},
	icon: {
		color: 'gray',
		fontSize: 30,
	},
	starsContainer: {
		width: '70px',
		display: 'flex',
		justifyContent: 'space-between',
	},
	progress: {
		marginTop: 100,
		textAlign: 'center',
	},
	alertButton: {
		alignSelf: 'flex-end',
	},
});
