import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import * as actions from '../actions/FilmsListActions';
import Film from '../../Film/view';
import Alert from '../../Alert/view';
import styles from '../view/styles';

class FilmsListContainer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount() {
		const { page, filmsRequested } = this.props;

		window.addEventListener('scroll', this.onScroll);
		filmsRequested(page);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll() {
		const { isLoaded, isLoadedAllFilms, page, filmsRequested } = this.props;
		if (
			window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
			isLoaded &&
			!isLoadedAllFilms
		) {
			filmsRequested(page + 1);
		}
	}

	render() {
		const { classes, isLoaded, films, error, page } = this.props;

		return error ? (
			<Alert error={error} />
		) : !isLoaded && page === 1 ? (
			<div className={classes.progress}>
				<CircularProgress size={80} color="secondary" />
			</div>
		) : (
			<div className={classes.container}>
				{films.map((item, i) => {
					return <Film key={i} {...item} />;
				})}
			</div>
		);
	}
}

FilmsListContainer.propTypes = {
	filmsRequested: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
	films: PropTypes.array.isRequired,
	isLoaded: PropTypes.bool.isRequired,
	isLoadedAllFilms: PropTypes.bool.isRequired,
	error: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
	return { ...state.films };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

const FilmsList = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilmsListContainer);

export default withStyles(styles)(FilmsList);
