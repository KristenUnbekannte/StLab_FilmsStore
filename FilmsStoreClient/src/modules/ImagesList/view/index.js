import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Gallery from 'react-grid-gallery';
import styles from './styles';

const ImagesList = ({ classes, images }) => {
	return (
		<div className={classes.root}>
			<Gallery
				rowHeight={150}
				enableImageSelection={false}
				images={[...images].map(item => ({
					src: item.url,
					thumbnail: item.url,
					thumbnailHeight: 150,
					thumbnailWidth: 270,
				}))}
			/>
		</div>
	);
};

ImagesList.propTypes = {
	classes: PropTypes.object.isRequired,
	images: PropTypes.array.isRequired,
};

export default withStyles(styles)(ImagesList);
