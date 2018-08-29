export default styles => ({
	card: {
		width: 300,
		hight: 250,
		margin: '10px 5px',
		textDecoration: 'none',
		border: '1px solid gray',
		boxShadow: '1px 1px 10px black',
		borderRadius: 25,
		'&:hover': {
			transform: 'scale(1.05)',
			transition: '.2s all',
			zIndex: 10000,
			boxShadow: '1px 1px 10px black',
		},
	},
	media: {
		height: 220,
		paddingTop: '56.25%', // 16:9
	},
});
