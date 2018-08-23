import React from 'react';
import DialogAlert from '../view';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/RatingActions';
import * as filmDetailsActions from '../../FilmDetails/actions/FilmDetailsActions';
import * as userActions from '../../Authorization/reducers/UserReducer';
import TokenService from '../../../Services/TokenService';
import baseUrl from '../../../Common/BaseUrl';

class AlertDialogContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};

		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.ratingSend = this.ratingSend.bind(this);
		this.updateTotalRating = this.updateTotalRating.bind(this);
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

		let data = {
			filmId: this.props.filmId,
			value: this.props.value,
		};

		axios
			.post(`${baseUrl}/rating`, data, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${TokenService.getToken('Token')}`,
				},
			})
			.then(response => {
				this.props.rating.ratingCleared();
				this.updateTotalRating();
				this.props.filmDetails.userRatingSet(true);
			})
			.catch(error => {
				if (error.response) {
					if (error.response.status === 401) {
						this.props.user.userUnauthorized();
						TokenService.removeToken();
						this.props.history.push('/login');
					}
				}
			});
	}

	updateTotalRating() {
		axios
			.get(`${baseUrl}/films/rating/${this.props.filmId}`)
			.then(response => {
				this.props.filmDetails.totalRatingChanged(response.data);
			})
			.catch(error => {
				console.log(error.toString());
			});
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
	rating: PropTypes.object.isRequired,
	filmDetails: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		value: state.rating.value,
		filmId: state.filmDetails.filmId,
		isUserRated: state.filmDetails.isUserRated,
		isAuthorized: state.user.isAuthorized,
	};
};

const mapDispatchToProps = dispatch => ({
	rating: bindActionCreators({ ...actions }, dispatch),
	filmDetails: bindActionCreators({ ...filmDetailsActions }, dispatch),
	user: bindActionCreators({ ...userActions }, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AlertDialogContainer);
