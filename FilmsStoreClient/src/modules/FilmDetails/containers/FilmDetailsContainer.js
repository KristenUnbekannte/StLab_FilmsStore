import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/FilmDetailsActions';
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
		const { film, history } = this.props;
		return <FilmDetail film={film} history={history} />;
	}
}

FilmDetailsContainer.propTypes = {
	filmDetailsRequested: PropTypes.func.isRequired,
	userRatingRequested: PropTypes.func.isRequired,
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilmDetailsContainer);
