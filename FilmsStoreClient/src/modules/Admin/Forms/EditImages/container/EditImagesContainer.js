import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import EditImagesForm from '../view';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formValueSelector } from 'redux-form';
import * as actions from '../../../actions/AdminActions';
import { withStyles } from '@material-ui/core/styles';
import styles from '../view/styles';
import CloseIcon from '@material-ui/icons/Close';

class EditImagesContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleSubmit(values) {
		this.handleClose();
		const { imageId, url } = values;
		const data = {
			filmId: this.props.filmId,
			imageId,
			url,
		};
		this.props.imagesAddRequested(data);
	}

	handleClickOpen() {
		this.setState({ open: true });
		const { images, index, imageSet } = this.props;
		imageSet(images[index]);
	}

	handleClose() {
		this.setState({ open: false });
		this.props.imageCleared();
	}

	render() {
		const { classes, form, icon } = this.props;
		return (
			<div>
				<Button
					className={classes.editButton}
					onClick={this.handleClickOpen}
					color="primary"
				>
					{icon}
				</Button>
				<Dialog open={this.state.open} onClose={this.handleClose}>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							<CloseIcon />
						</Button>
					</DialogActions>
					<DialogContent>
						<EditImagesForm
							onSubmit={this.handleSubmit}
							addImage={this.AddImage}
							url={form.url}
						/>
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}

EditImagesContainer.propTypes = {
	images: PropTypes.array.isRequired,
	filmId: PropTypes.number.isRequired,
	form: PropTypes.object.isRequired,
	imageCleared: PropTypes.func.isRequired,
	imagesAddRequested: PropTypes.func.isRequired,
	imageSet: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		form: { ...formValueSelector('editImage')(state, 'url', 'filmId') },
		images: state.images.images,
		filmId: state.filmDetails.filmId,
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

const EditImages = connect(
	mapStateToProps,
	mapDispatchToProps
)(EditImagesContainer);

export default withStyles(styles)(EditImages);
