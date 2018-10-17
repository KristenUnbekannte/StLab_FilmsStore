import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import * as actions from '../../actions/AdminActions';
import Image from '../view';
import styles from '../view/styles';

class AdminImageContainer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};

		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.ImageDelete = this.ImageDelete.bind(this);
	}
	handleClickOpen() {
		this.setState({ open: true });
	}

	handleClose() {
		this.setState({ open: false });
	}

	ImageDelete() {
		this.setState({ open: false });
		const { imageDeleteRequested, image } = this.props;
		imageDeleteRequested(image.imageId);
	}
	render() {
		return (
			<Image
				image={this.props.image}
				open={this.state.open}
				handleClickOpen={this.handleClickOpen}
				handleClose={this.handleClose}
				ImageDelete={this.ImageDelete}
				index={this.props.index}
			/>
		);
	}
}

AdminImageContainer.propTypes = {
	classes: PropTypes.object.isRequired,
	imageDeleteRequested: PropTypes.func.isRequired,
	image: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

const ImageContainer = connect(
	null,
	mapDispatchToProps
)(AdminImageContainer);

export default withStyles(styles)(ImageContainer);
