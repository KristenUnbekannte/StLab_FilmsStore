import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ImagesList from '../view';
import * as actions from '../actions/ImagesActions';

class ImagesListContainer extends React.PureComponent {
	componentDidMount() {
		this.props.imagesRequested(this.props.filmId);
	}

	render() {
		return <ImagesList images={this.props.images} />;
	}
}

ImagesListContainer.propTypes = {
	images: PropTypes.array.isRequired,
	imagesRequested: PropTypes.func.isRequired,
	filmId: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
	return { ...state.images };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ImagesListContainer);
