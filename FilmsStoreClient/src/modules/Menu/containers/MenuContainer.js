import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../../Authorization/actions/UserActions';
import * as filmDetailsActions from '../../FilmDetails/actions/FilmDetailsActions';
import * as filmsActions from '../../FilmsList/actions/FilmsListActions';
import SessionService from '../../../Services/SessionService';
import Menu from '../view';

class MenuContainer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			anchorEl: null,
			search: '',
		};

		this.handleMenu = this.handleMenu.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleLogOut = this.handleLogOut.bind(this);
		this.onChangeField = this.onChangeField.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleMenu(event) {
		this.setState({ anchorEl: event.currentTarget });
	}

	handleClose() {
		this.setState({ anchorEl: null });
	}
	handleLogOut() {
		const { user, filmDetails } = this.props;

		this.handleClose();
		SessionService.removeAllItems();
		user.userUnauthorized();
		filmDetails.userRatingReset();
	}
	onChangeField(event) {
		this.setState({ search: event.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const { filmsCleared, allFilmsRequested } = this.props.film;

		filmsCleared();
		allFilmsRequested(this.state.search);
		this.setState({ search: '' });
	}

	render() {
		const { isAuthorized, role } = this.props;
		const { anchorEl, search } = this.state;

		return (
			<Menu
				isAuthorized={isAuthorized}
				handleMenu={this.handleMenu}
				anchorEl={anchorEl}
				handleClose={this.handleClose}
				handleLogOut={this.handleLogOut}
				onChangeField={this.onChangeField}
				handleSubmit={this.handleSubmit}
				role={role}
				search={search}
			/>
		);
	}
}

MenuContainer.propTypes = {
	isAuthorized: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
	filmDetails: PropTypes.object.isRequired,
	film: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		...state.user,
	};
};

const mapDispatchToProps = dispatch => ({
	user: bindActionCreators({ ...actions }, dispatch),
	filmDetails: bindActionCreators({ ...filmDetailsActions }, dispatch),
	film: bindActionCreators({ ...filmsActions }, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuContainer);
