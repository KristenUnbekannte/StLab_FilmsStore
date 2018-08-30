import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const DeleteAlert = ({
	open,
	handleClickOpen,
	handleClose,
	ItemDelete,
	itemName,
	classes,
}) => {
	return (
		<React.Fragment>
			<Button
				color="secondary"
				onClick={handleClickOpen}
				className={classes.button}
			>
				<DeleteIcon />
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle id="alert-dialog-title">
					{`Are you sure you want to delete '${itemName}'?`}
				</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={ItemDelete} autoFocus>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};

DeleteAlert.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClickOpen: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
	ItemDelete: PropTypes.func.isRequired,
	itemName: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteAlert);
