import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StarRatings from 'react-star-ratings';
import { withStyles } from '@material-ui/core/styles';
import * as actions from '../actions/RatingActions';
import styles from '../view/styles';

class StarsRatingContainer extends React.Component {
	constructor(props) {
		super(props);

		this.changeRating = this.changeRating.bind(this);
	}

	changeRating(newRating) {
		this.props.ratingSet(newRating);
	}

	render() {
		return (
			<div className={this.props.classes.rating}>
				<StarRatings
					rating={this.props.value}
					starRatedColor="orange"
					numberOfStars={5}
					changeRating={this.changeRating}
					starDimension="30px"
					starSpacing="0"
				/>
			</div>
		);
	}
}

StarsRatingContainer.propTypes = {
	rating: PropTypes.number,
	classes: PropTypes.object.isRequired,
	value: PropTypes.number.isRequired,
	ratingSet: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return { ...state.rating };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

const StarsRating = connect(
	mapStateToProps,
	mapDispatchToProps
)(StarsRatingContainer);
export default withStyles(styles)(StarsRating);
