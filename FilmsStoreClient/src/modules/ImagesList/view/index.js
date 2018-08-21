import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import styles from './styles';

const ImagesList = ({ classes, images }) => {
	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={3} cellHeight={130}>
				{[...images].map((item, key) => (
					<GridListTile key={key}>
						<img src={item.url} alt="film" />
						<GridListTileBar
							classes={{
								root: classes.titleBar,
								title: classes.title,
							}}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
};

ImagesList.propTypes = {
	classes: PropTypes.object.isRequired,
	images: PropTypes.array.isRequired,
};

export default withStyles(styles)(ImagesList);
