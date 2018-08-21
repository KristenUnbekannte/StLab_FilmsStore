import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ImagesList from '../view';
import * as actions from '../../FilmsList/actions/FilmsListActions';

class ImagesListContainer extends React.PureComponent {
	render() {
		return <ImagesList images={this.props.images} />;
	}
}

ImagesListContainer.propTypes = {
	images: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
	return { images: state.filmDetails.images };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ImagesListContainer);
