import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                auth.uid ? (
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
        auth: state.firebase.auth
    };
};

export default connect(mapStateToProps)(PrivateRoute);
