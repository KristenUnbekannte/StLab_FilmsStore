import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/FilmsListActions';
import FilmList from '../view';

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
		const { error, isLoaded, page, films } = this.props;
		return (
			<FilmList error={error} isLoaded={isLoaded} page={page} films={films} />
		);
	}
}

FilmsListContainer.propTypes = {
	filmsRequested: PropTypes.func.isRequired,
	films: PropTypes.array.isRequired,
	isLoaded: PropTypes.bool.isRequired,
	isLoadedAllFilms: PropTypes.bool.isRequired,
	error: PropTypes.string.isRequired,
	page: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
	return { ...state.films };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilmsListContainer);
