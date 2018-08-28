import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formValueSelector } from 'redux-form';
import * as filmActions from '../../../FilmDetails/actions/FilmDetailsActions';
import * as actions from '../../actions/AdminActions';
import EditFilmForm from '../view';

class EditFilmContainer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		this.props.film.filmDetailsRequested(this.state.id);
	}
	handleSubmit(values) {
		const data = {
			...values,
		};
		this.props.admin.filmAddRequested(data, this.props.history);
	}

	render() {
		return (
			<EditFilmForm
				onSubmit={this.handleSubmit}
				imageUrl={this.props.imageUrl}
				images={this.props.images}
			/>
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
		...formValueSelector('editfilm')(state, 'imageUrl', 'images'),
	};
};

const mapDispatchToProps = dispatch => ({
	admin: bindActionCreators({ ...actions }, dispatch),
	film: bindActionCreators({ ...filmActions }, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditFilmContainer);
