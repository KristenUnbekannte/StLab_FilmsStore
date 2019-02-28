import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reset } from "redux-form";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import * as actions from "../actions/CommentsListActions";
import CommentsList from "../view";
import styles from "../view/styles";

const socket = require("socket.io-client")("http://localhost:58038");
class CommentsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.filmId
    };

    socket.emit("join", { room: this.state.id });
    socket.on("GetComment", data => {
      this.props.comment.commentRequested(data.comment);
    });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadComments = this.loadComments.bind(this);
  }

  loadComments() {
    const { commentsGetRequested } = this.props.comment;
    commentsGetRequested(this.state.id);
  }

  handleSubmit(values) {
    const { commentSendRequested } = this.props.comment;

    commentSendRequested(this.state.id, values.message);
    this.props.reset();
  }

  componentDidMount() {
    this.loadComments();
  }

  componentWillUnmount() {
    socket.emit("leave", { room: this.state.id });
  }

  render() {
    return (
      <CommentsList
        comments={this.props.comments}
        onSubmit={this.handleSubmit}
        isAuth={this.props.isAuthorized}
      />
    );
  }
}

CommentsListContainer.propTypes = {
  comment: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
  comments: PropTypes.array,
  isAuthorized: PropTypes.bool.isRequired,
  filmId: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return { ...state.comments, ...state.user };
};

const mapDispatchToProps = dispatch => ({
  comment: bindActionCreators({ ...actions }, dispatch),
  reset: () => dispatch(reset("comment"))
});

const Comments = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsListContainer);

export default withStyles(styles)(Comments);
