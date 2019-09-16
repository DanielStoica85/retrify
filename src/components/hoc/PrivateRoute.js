import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: !!state.firebase.auth.uid
    };
};

export default connect(mapStateToProps)(PrivateRoute);
