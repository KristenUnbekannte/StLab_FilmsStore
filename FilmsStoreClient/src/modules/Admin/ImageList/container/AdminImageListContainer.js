import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import AdminImageContainer from '../../Image/container/AdminImageContainer';
import AddImage from '../view/AddImage';
import * as actions from '../../../ImagesList/actions/ImagesActions';
import styles from '../view/styles';

class AdminImageListContainer extends React.Component {
	componentDidMount() {
		this.props.imagesRequested(this.props.filmId);
	}

	render() {
		const { isLoaded, classes, images } = this.props;
		return isLoaded ? (
			<div className={classes.container}>
				<AddImage />
				{images.map((item, i) => {
					return <AdminImageContainer key={i} index={i} image={item} />;
				})}
			</div>
		) : (
			<div className={classes.progress}>
				<CircularProgress size={80} color="secondary" />
			</div>
		);
	}
}

AdminImageListContainer.propTypes = {
	classes: PropTypes.object.isRequired,
	images: PropTypes.array.isRequired,
	imagesRequested: PropTypes.func.isRequired,
	isLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
	return { ...state.images };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

const ImageListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminImageListContainer);

export default withStyles(styles)(ImageListContainer);
