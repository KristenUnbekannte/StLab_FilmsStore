import deepOrange from '@material-ui/core/colors/deepOrange';

export default styles => ({
	body: {
		maxWidth: 840,
		margin: 'auto',
		border: '1px solid gray',
		boxShadow: '1px 1px 5px black',
	},
	card: {
		padding: 20,
		maxWidth: 820,
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
	},
	details: {
		maxWidth: 450,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	cover: {
		width: 325,
		height: 500,
		border: '1px solid gray',
		boxShadow: '1px 1px 10px black',
		borderRadius: 20,
	},
	orangeAvatar: {
		width: 35,
		height: 35,
		fontSize: 16,
		color: '#fff',
		backgroundColor: deepOrange[500],
	},
	starGold: {
		color: 'orange',
		fontSize: 30,
	},
	starEmpty: {
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
	video: {
		margin: '10px 0',
		padding: 20,
		display: 'flex',
		justifyContent: 'center',
	},
});
