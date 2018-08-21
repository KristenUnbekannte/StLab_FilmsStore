import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import * as actions from '../actions/FilmsListActions';
import Film from '../../Film/view';
import Alert from '../../Alert/view';
import baseUrl from '../../../Common/BaseUrl';
import styles from '../view/styles';

class FilmsListContainer extends React.PureComponent {
	componentDidMount() {
		this.props.filmsLoading();

		axios
			.get(`${baseUrl}/api/films`)
			.then(response => {
				this.props.filmsLoaded(response.data);
			})
			.catch(error => {
				if (error.response === 'undefined') {
					this.props.filmsError(error.response.data.toString());
				}
				this.props.filmsError(error.toString());
			});
	}
	render() {
		return this.props.error ? (
			<Alert error={this.props.error} />
		) : this.props.isLoaded ? (
			<Paper className={this.props.classes.container}>
				{this.props.films.map((item, i) => {
					return <Film key={i} {...item} />;
				})}
			</Paper>
		) : (
			<div className={this.props.classes.progress}>
				<CircularProgress size={80} color="secondary" />
			</div>
		);
	}
}

FilmsListContainer.propTypes = {
	filmsLoading: PropTypes.func.isRequired,
	filmsLoaded: PropTypes.func.isRequired,
	filmsError: PropTypes.func.isRequired,
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
