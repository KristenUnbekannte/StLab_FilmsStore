import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, Button, Avatar } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import renderField from './renderField';
import styles from './styles';

let CommentsList = ({ classes, comments, handleSubmit, isAuth }) => {
  return (
    <div className={classes.root}>
      <List>
        {[...comments].map((item, key) => (
          <ListItem key={key} className={classes.commentContainer}>
            <Avatar className={classes.orangeAvatar}><PersonPinIcon /></Avatar>
            <div>
              <ListItemText primary={item.userName} secondary={item.message} />
              <div>
                <ListItemText secondary={item.date} />
              </div>
            </div>
          </ListItem>
        ))}
      </List>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Field name="message" component={renderField} type="text" isAuth={isAuth} />
        <Button type="submit" variant="contained" color="primary" className={classes.button} disabled={!isAuth}>
          <SendIcon />
        </Button>
      </form>
    </div>
  );
};

CommentsList.propTypes = {
  classes: PropTypes.object.isRequired,
  form: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired,
};

CommentsList = reduxForm({
  form: "comment"
})(CommentsList);

export default withStyles(styles)(CommentsList);