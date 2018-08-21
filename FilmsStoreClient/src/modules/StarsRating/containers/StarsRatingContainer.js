import React from "react";
import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating
    };
    this.changeRating = this.changeRating.bind(this);
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
  }

  render() {
    return (
      <div>
        <StarRatings
          rating={this.state.rating}
          starRatedColor="orange"
          numberOfStars={5}
          changeRating={this.changeRating}
          starDimension="30px"
          starSpacing="0"
        />
        {this.state.rating}
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number
};

export default Rating;
