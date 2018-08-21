import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import styles from "./styles";

const Film = ({ classes, filmId, rating, imageUrl, name, year, genre }) => {
  return (
    <Card className={classes.card} component={Link} to={`/film/${filmId}`}>
      <CardMedia className={classes.media} image={imageUrl} title={name} />
      <CardContent>
        <Typography variant="title">{name}</Typography>
        <Typography component="p">
          {genre}, {year}
        </Typography>
        <StarRatings
          rating={rating}
          isSelectable={false}
          starDimension="15px"
          starSpacing="0"
          starRatedColor="orange"
        />
        {rating}
      </CardContent>
    </Card>
  );
};

Film.propTypes = {
  classes: PropTypes.object.isRequired,
  filmId: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired
};

export default withStyles(styles)(Film);
