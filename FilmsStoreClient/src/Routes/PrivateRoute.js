import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const PrivateRoute = ({ role, ...props }) => {
	return role === 'admin' ? <Route {...props} /> : <Redirect to="/" />;
};

const mapStateToProps = state => {
	return { ...state.user };
};

export default connect(mapStateToProps)(PrivateRoute);
