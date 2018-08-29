import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import * as actions from '../actions/FilmsListActions';
import Film from '../../Film/view';
import Alert from '../../Alert/view';
import styles from '../view/styles';

class FilmsListContainer extends React.PureComponent {
	componentDidMount() {
		this.props.filmsRequested();
	}
	render() {
		return this.props.error ? (
			<Alert error={this.props.error} />
		) : this.props.isLoaded ? (
			<div className={this.props.classes.container}>
				{this.props.films.map((item, i) => {
					return <Film key={i} {...item} />;
				})}
			</div>
		) : (
			<div className={this.props.classes.progress}>
				<CircularProgress size={80} color="secondary" />
			</div>
		);
	}
}

FilmsListContainer.propTypes = {
	filmsRequested: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
	films: PropTypes.array.isRequired,
	isLoaded: PropTypes.bool.isRequired,
	error: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
	return { ...state.films };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

const FilmsList = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilmsListContainer);

export default withStyles(styles)(FilmsList);
