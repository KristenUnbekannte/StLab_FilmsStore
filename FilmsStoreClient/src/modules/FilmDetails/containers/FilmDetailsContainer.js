import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from "prop-types";
import * as actions from "../actions/FilmDetailsActions";
import styles from '../view/styles';
import FilmDetail from "../view";
import baseUrl from '../../../Common/BaseUrl';

class FilmDetailsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
    };
  }

  componentDidMount() {
    this.props.filmDetailsLoading();

    axios
      .get(`${baseUrl}/api/films/${this.state.id}`)
      .then(response => {
        this.props.filmDetailsLoaded(response.data);
      })
      .catch(error => {
        this.props.filmDetailsError(error.toString());
      });
  }

  render() {
    return (
      this.props.isLoaded ?
        (<Paper className={this.props.classes.body}>
          <FilmDetail film={this.props.film} />
        </Paper>
        ) : (
          <div className={this.props.classes.progress}>
            <CircularProgress size={80} color="secondary" />
          </div>
        )
    );
  }
}

FilmDetailsContainer.propTypes = {
  filmDetailsLoading: PropTypes.func.isRequired,
  filmDetailsLoaded: PropTypes.func.isRequired,
  filmDetailsError: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  film: PropTypes.object.isRequired,
  isLoaded: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
  return { ...state.filmDetails };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...actions }, dispatch);
};

const FilmDetails = connect(mapStateToProps, mapDispatchToProps)(FilmDetailsContainer);
export default withStyles(styles)(FilmDetails);
