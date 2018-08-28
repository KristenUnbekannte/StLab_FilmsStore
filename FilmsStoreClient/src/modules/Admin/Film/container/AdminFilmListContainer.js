import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import * as actions from '../../../FilmsList/actions/FilmsListActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import AdminFilmContainer from './AdminFilmContainer';
import AddFilm from '../view/AddFilm';
import styles from '../view/styles';

class AdminFilmListContainer extends React.Component {
	componentDidMount() {
		this.props.filmsRequested();
	}

	render() {
		const { isLoaded, classes, films } = this.props;
		return isLoaded ? (
			<Paper className={classes.container}>
				<AddFilm />
				{films.map((item, i) => {
					return <AdminFilmContainer key={i} film={item} />;
				})}
			</Paper>
		) : (
			<div className={classes.progress}>
				<CircularProgress size={80} color="secondary" />
			</div>
		);
	}
}

AdminFilmListContainer.propTypes = {
	classes: PropTypes.object.isRequired,
	films: PropTypes.array.isRequired,
	filmsRequested: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return { ...state.films };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

AdminFilmListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminFilmListContainer);

export default withStyles(styles)(AdminFilmListContainer);
