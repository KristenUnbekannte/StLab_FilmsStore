import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
import EditImageContainer from '../../Forms/EditImages/container/EditImagesContainer';

import styles from './styles';

const AddImage = ({ classes }) => {
	return (
		<Card className={classes.card}>
			<EditImageContainer icon={<AddIcon />} />
		</Card>
	);
};

AddImage.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddImage);
