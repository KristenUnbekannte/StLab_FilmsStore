import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formValueSelector } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import AdminImageListContainer from '../../../ImageList/container/AdminImageListContainer';
import * as filmActions from '../../../../FilmDetails/actions/FilmDetailsActions';
import * as actions from '../../../actions/AdminActions';
import EditFilmForm from '../view';
import styles from '../view/styles';

class EditFilmContainer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		this.state.id
			? this.props.film.filmDetailsRequested(this.state.id)
			: this.props.film.filmDetailsCleared();
	}
	handleSubmit(values) {
		const data = {
			...values,
		};
		this.props.admin.filmAddRequested(data, this.props.history);
	}

	render() {
		return (
			<div className={this.props.classes.editFilmContainer}>
				<EditFilmForm
					onSubmit={this.handleSubmit}
					imageUrl={this.props.imageUrl}
					images={this.props.images}
					filmId={this.state.id}
				/>
				{this.state.id ? (
					<AdminImageListContainer filmId={this.state.id} />
				) : null}
			</div>
		);
	}
}

EditFilmContainer.propTypes = {
	imageUrl: PropTypes.string,
	images: PropTypes.array,
	film: PropTypes.object.isRequired,
	admin: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		...formValueSelector('editfilm')(state, 'imageUrl', 'name'),
	};
};

const mapDispatchToProps = dispatch => ({
	admin: bindActionCreators({ ...actions }, dispatch),
	film: bindActionCreators({ ...filmActions }, dispatch),
});

const EditFilm = connect(
	mapStateToProps,
	mapDispatchToProps
)(EditFilmContainer);

export default withStyles(styles)(EditFilm);
