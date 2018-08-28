import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuBar from '../../Menu/containers/MenuContainer';
import styles from './styles';

const Header = ({ classes }) => {
	return (
		<React.Fragment>
			<MenuBar className={classes.header} />
		</React.Fragment>
	);
};

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
