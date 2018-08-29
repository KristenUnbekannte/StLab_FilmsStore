import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, MenuItem, Menu } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as actions from '../../Authorization/actions/UserActions';
import * as filmDetailsActions from '../../FilmDetails/actions/FilmDetailsActions';
import SessionService from '../../../Services/SessionService';
import styles from '../view/styles';

class MenuContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { anchorEl: null };

		this.handleMenu = this.handleMenu.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleLogOut = this.handleLogOut.bind(this);
	}
	handleMenu(event) {
		this.setState({ anchorEl: event.currentTarget });
	}

	handleClose() {
		this.setState({ anchorEl: null });
	}
	handleLogOut() {
		this.handleClose();
		SessionService.removeAllItems();
		this.props.user.userUnauthorized();
		this.props.filmDetails.userRatingReset();
	}
	render() {
		const { classes, isAuthorized, role } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<AppBar position="static" className={classes.root}>
				<Toolbar>
					<Typography className={classes.title} component={Link} to="/">
						FilmsStore
					</Typography>
					{isAuthorized ? (
						<Typography className={classes.userName}>
							{`Hello, ${SessionService.getItem('userName')}`}
						</Typography>
					) : null}
					<div>
						<IconButton
							aria-owns={open ? 'menu-appbar' : null}
							aria-haspopup="true"
							onClick={this.handleMenu}
							color="inherit"
							className={classes.menuButton}
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
							transformOrigin={{ vertical: 'top', horizontal: 'right' }}
							open={open}
							onClose={this.handleClose}
						>
							{role === 'admin' ? (
								<MenuItem
									onClick={this.handleClose}
									component={Link}
									to="/admin"
								>
									Admin panel
								</MenuItem>
							) : null}
							{isAuthorized ? (
								<MenuItem onClick={this.handleLogOut}>Sign out</MenuItem>
							) : (
								[
									<MenuItem
										onClick={this.handleClose}
										key={1}
										component={Link}
										to="/register"
									>
										Sign up
									</MenuItem>,
									<MenuItem
										onClick={this.handleClose}
										key={2}
										component={Link}
										to="/login"
									>
										Sign in
									</MenuItem>,
								]
							)}
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
		);
	}
}

MenuContainer.propTypes = {
	classes: PropTypes.object.isRequired,
	isAuthorized: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
	filmDetails: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		...state.user,
	};
};

const mapDispatchToProps = dispatch => ({
	user: bindActionCreators({ ...actions }, dispatch),
	filmDetails: bindActionCreators({ ...filmDetailsActions }, dispatch),
});

const MenuBar = connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuContainer);
export default withStyles(styles)(MenuBar);
