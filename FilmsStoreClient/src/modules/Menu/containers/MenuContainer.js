import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import * as actions from '../../Authorization/actions/UserActions';
import * as filmDetailsActions from '../../FilmDetails/actions/FilmDetailsActions';
import SessionService from '../../../Services/SessionService';
import styles from '../view/styles';

class MenuContainer extends React.Component {
	D;
	constructor(props) {
		super(props);
		this.state = {
			anchorEl: null,
		};

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
		const { classes, isAuthorized } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<AppBar position="static" className={classes.root}>
				<Toolbar>
					<IconButton
						className={classes.menuButton}
						color="inherit"
						aria-label="Menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="title"
						color="inherit"
						className={classes.title}
						component={Link}
						to="/"
					>
						FilmsStore
					</Typography>
					{isAuthorized ? (
						<Typography
							variant="title"
							className={classes.userName}
						>{`Hello, ${SessionService.getItem('UserName')}`}</Typography>
					) : null}
					<div>
						<IconButton
							aria-owns={open ? 'menu-appbar' : null}
							aria-haspopup="true"
							onClick={this.handleMenu}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={open}
							onClose={this.handleClose}
						>
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
