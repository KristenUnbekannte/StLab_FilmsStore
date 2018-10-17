import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
	Paper,
	Typography,
	MenuItem,
	Menu,
	Input,
	Button,
} from '@material-ui/core';
import SessionService from '../../../Services/SessionService';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles';

const MenuApp = ({
	classes,
	isAuthorized,
	handleMenu,
	anchorEl,
	handleClose,
	handleLogOut,
	role,
	onChangeField,
	handleSubmit,
	search,
}) => {
	return (
		<Paper className={classes.root}>
			<div className={classes.searchContainer}>
				<Typography className={classes.title} component={Link} to="/">
					FilmsStore
				</Typography>
				<form onSubmit={handleSubmit} className={classes.form}>
					<Input
						id="search"
						onChange={onChangeField}
						className={classes.input}
						value={search}
					/>
					<Button type="submit" className={classes.searchButton}>
						<SearchIcon />
					</Button>
				</form>
			</div>
			<div className={classes.userContainer}>
				{isAuthorized ? (
					<Typography className={classes.userName}>
						{`Hello, ${SessionService.getItem('userName')}`}
					</Typography>
				) : null}
				<IconButton
					aria-owns={!!anchorEl ? 'menu-appbar' : null}
					aria-haspopup="true"
					onClick={handleMenu}
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
					open={!!anchorEl}
					onClose={handleClose}
				>
					{role === 'admin' ? (
						<MenuItem onClick={handleClose} component={Link} to="/admin">
							Admin panel
						</MenuItem>
					) : null}
					{isAuthorized ? (
						<MenuItem onClick={handleLogOut}>Sign out</MenuItem>
					) : (
						[
							<MenuItem
								onClick={handleClose}
								key={1}
								component={Link}
								to="/register"
							>
								Sign up
							</MenuItem>,
							<MenuItem
								onClick={handleClose}
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
		</Paper>
	);
};

MenuApp.propTypes = {
	classes: PropTypes.object.isRequired,
	isAuthorized: PropTypes.bool.isRequired,
	handleMenu: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
	handleLogOut: PropTypes.func.isRequired,
	onChangeField: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	search: PropTypes.string.isRequired,
	anchorEl: PropTypes.object,
	role: PropTypes.string,
};

export default withStyles(styles)(MenuApp);
