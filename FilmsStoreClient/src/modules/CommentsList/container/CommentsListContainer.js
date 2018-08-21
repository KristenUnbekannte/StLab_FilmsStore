import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reset } from "redux-form";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from "prop-types";
import TokenService from '../../../Services/TokenService';
import * as actions from "../actions/CommentsListActions";
import * as userActions from "../../Authorization/actions/UserActions";
import CommentsList from '../view';
import baseUrl from '../../../Common/BaseUrl';
import styles from '../view/styles'

class CommentsListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.filmId,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadComments = this.loadComments.bind(this);
  }

  loadComments() {
    const { commentsLoading, commentsError, commentsLoaded } = this.props.comment;
    commentsLoading();

    axios.get(`${baseUrl}/api/films/comments/${this.state.id}`)
      .then(response => {
        commentsLoaded(response.data);
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.props.user.userUnauthorized();
        }
        commentsError(error.toString());
      });
  }

  handleSubmit(values) {
    let data = {
      filmId: this.state.id,
      message: values.message,
    };

    axios.post(`${baseUrl}/api/films`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${TokenService.getToken("Token")}`
        }
      })
      .then((response) => {
        this.props.reset();
        this.loadComments();
      })
      .catch((error) => {
        console.log(error.toString());
      });
  }

  componentDidMount() {
    this.loadComments();
  }

  render() {
    return (
      this.props.isLoaded ?
        (<CommentsList
          comments={this.props.comments}
          onSubmit={this.handleSubmit}
          isAuth={this.props.isAuthorized}
        />
        ) : (
          <div className={this.props.classes.progress}>
            <CircularProgress size={40} color="secondary" />
          </div>
        )
    );
  }
}

CommentsListContainer.propTypes = {
  comment: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
  comments: PropTypes.array,
  isAuthorized: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  filmId: PropTypes.number.isRequired
}

const mapStateToProps = state => {
  return { ...state.comments, ...state.user };
};

const mapDispatchToProps = dispatch => ({
  comment: bindActionCreators({ ...actions }, dispatch),
  user: bindActionCreators({ ...userActions }, dispatch),
  reset: () => dispatch(reset('comment'))
});

const Comments = connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
export default withStyles(styles)(Comments);