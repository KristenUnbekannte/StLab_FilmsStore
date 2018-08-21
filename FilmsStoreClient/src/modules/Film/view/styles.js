export default styles => ({
	card: {
		width: 240,
		hight: 230,
		margin: 5,
		textDecoration: 'none',
		'&:hover': {
			transform: 'scale(1.03)',
			boxShadow: '0 0 5px',
			transition: '.2s all',
			zIndex: 10000,
		},
	},
	media: {
		height: 200,
		paddingTop: '56.25%', // 16:9
	},
});
