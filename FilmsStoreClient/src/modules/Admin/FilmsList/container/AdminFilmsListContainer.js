import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import * as actions from '../../../FilmsList/actions/FilmsListActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import AdminFilmContainer from '../../Film/container/AdminFilmContainer';
import AddFilm from '../view/AddFilm';
import styles from '../view/styles';

class AdminFilmsListContainer extends React.Component {
	componentDidMount() {
		this.props.filmsRequested();
	}
	render() {
		const { isLoaded, classes, films } = this.props;
		return isLoaded ? (
			<div className={classes.container}>
				<AddFilm />
				{films.map((item, i) => {
					return <AdminFilmContainer key={i} film={item} />;
				})}
			</div>
		) : (
			<div className={classes.progress}>
				<CircularProgress size={80} color="secondary" />
			</div>
		);
	}
}

AdminFilmsListContainer.propTypes = {
	classes: PropTypes.object.isRequired,
	films: PropTypes.array.isRequired,
	filmsRequested: PropTypes.func.isRequired,
	isLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
	return { ...state.films };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

AdminFilmsListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminFilmsListContainer);

export default withStyles(styles)(AdminFilmsListContainer);
