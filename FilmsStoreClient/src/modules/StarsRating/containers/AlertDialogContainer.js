import React from 'react';
import DialogAlert from '../view';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/RatingActions';

class AlertDialogContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};

		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.ratingSend = this.ratingSend.bind(this);
	}

	handleClickOpen() {
		this.props.isAuthorized
			? this.setState({ open: true })
			: this.props.history.push('/login');
	}

	handleClose() {
		this.setState({ open: false });
	}

	ratingSend() {
		this.setState({ open: false });

		const data = {
			filmId: this.props.filmId,
			value: this.props.value,
		};
		const { history, ratingSendRequested } = this.props;
		ratingSendRequested(data, history);
	}

	render() {
		return (
			<DialogAlert
				open={this.state.open}
				handleClickOpen={this.handleClickOpen}
				handleClose={this.handleClose}
				ratingSend={this.ratingSend}
				isUserRated={this.props.isUserRated}
			/>
		);
	}
}

AlertDialogContainer.propTypes = {
	value: PropTypes.number.isRequired,
	filmId: PropTypes.number.isRequired,
	isAuthorized: PropTypes.bool.isRequired,
	isUserRated: PropTypes.bool.isRequired,
	ratingSendRequested: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		value: state.rating.value,
		filmId: state.filmDetails.filmId,
		isUserRated: state.filmDetails.isUserRated,
		isAuthorized: state.user.isAuthorized,
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AlertDialogContainer);
