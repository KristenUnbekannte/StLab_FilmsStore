import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ImagesListContainer from "../../ImagesList/container/ImagesListContainer";
import CommentsListContainer from "../../CommentsList/container/CommentsListContainer";
import AlertDialogContainer from "../../StarsRating/containers/AlertDialogContainer";
import styles from "./styles";

const FilmDetail = ({ classes, film }) => {
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <div className={classes.cover}>
          <CardMedia
            className={classes.cover}
            image={film.imageUrl}
            title={film.name}
          />
        </div>
        <div className={classes.details}>
          <CardContent>
            <Typography variant="headline">{film.name}</Typography>
            <Typography variant="subheading">({film.year})</Typography>
            <div className={classes.starsContainer}>
              <StarBorderIcon className={classes.icon} />
              <Avatar className={classes.orangeAvatar}>{film.rating}</Avatar>
            </div>
            <Table padding="checkbox">
              <TableBody>
                <TableRow>
                  <TableCell variant="head">Genre</TableCell>
                  <TableCell>{film.genre}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">Country</TableCell>
                  <TableCell>{film.country}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">Producer</TableCell>
                  <TableCell>{film.producer}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Typography variant="body2">{film.description}</Typography>
          </CardContent>
          <div className={classes.alertButton}>
            <AlertDialogContainer />
          </div>
        </div>
      </Card>
      <ImagesListContainer />
      <CommentsListContainer filmId={film.filmId} />
    </React.Fragment>
  );
};

FilmDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  film: PropTypes.object.isRequired
};

export default withStyles(styles)(FilmDetail);
