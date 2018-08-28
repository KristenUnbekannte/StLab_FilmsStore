import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import * as actions from '../../actions/AdminActions';
import AdminFilm from '../view';
import styles from '../view/styles';

class AdminFilmContainer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};

		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.filmDelete = this.filmDelete.bind(this);
	}
	handleClickOpen() {
		this.setState({ open: true });
	}

	handleClose() {
		this.setState({ open: false });
	}

	filmDelete() {
		const { filmId } = this.props.film;
		const { filmDeleteRequested } = this.props;
		filmDeleteRequested(filmId);
		this.setState({ open: false });
	}
	render() {
		return (
			<AdminFilm
				film={this.props.film}
				open={this.state.open}
				handleClickOpen={this.handleClickOpen}
				handleClose={this.handleClose}
				filmDelete={this.filmDelete}
			/>
		);
	}
}

AdminFilmContainer.propTypes = {
	classes: PropTypes.object.isRequired,
	film: PropTypes.object.isRequired,
	filmDeleteRequested: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

const Admin = connect(
	null,
	mapDispatchToProps
)(AdminFilmContainer);

export default withStyles(styles)(Admin);
