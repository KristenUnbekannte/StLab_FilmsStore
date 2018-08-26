import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import * as actions from '../actions/FilmDetailsActions';
import styles from '../view/styles';
import FilmDetail from '../view';

class FilmDetailsContainer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id,
		};
	}

	componentDidMount() {
		const {
			filmDetailsRequested,
			isAuthorized,
			userRatingRequested,
		} = this.props;

		filmDetailsRequested(this.state.id);

		if (isAuthorized) {
			userRatingRequested(this.state.id);
		}
	}
	render() {
		return this.props.film.isLoaded ? (
			<Paper className={this.props.classes.body}>
				<FilmDetail film={this.props.film} history={this.props.history} />
			</Paper>
		) : (
			<div className={this.props.classes.progress}>
				<CircularProgress size={80} color="secondary" />
			</div>
		);
	}
}

FilmDetailsContainer.propTypes = {
	filmDetailsRequested: PropTypes.func.isRequired,
	userRatingRequested: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
	film: PropTypes.object.isRequired,
	isAuthorized: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
	return {
		film: { ...state.filmDetails },
		isAuthorized: state.user.isAuthorized,
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

const FilmDetails = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilmDetailsContainer);
export default withStyles(styles)(FilmDetails);
