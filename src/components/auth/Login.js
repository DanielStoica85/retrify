import React, { Component } from 'react';
import LabeledFormInput from '../layout/LabeledFormInput';
import { Button, Container, Form, FormGroup, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state);
    };

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to="/" />;
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <h4 className="text-black">Sign In</h4>
                    <LabeledFormInput
                        labelText="Email"
                        labelFor="email"
                        inputType="email"
                        inputName="email"
                        inputId="email"
                        inputPlaceholder="Add your email..."
                        handleChange={this.handleChange}
                    />
                    <LabeledFormInput
                        labelText="Password"
                        labelFor="password"
                        inputType="password"
                        inputName="password"
                        inputId="password"
                        inputPlaceholder="Add your password..."
                        handleChange={this.handleChange}
                    />
                    <FormGroup>
                        <Button color="primary">Login</Button>
                    </FormGroup>
                    {authError ? (
                        <Alert color="danger">{authError}</Alert>
                    ) : null}
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: credentials => dispatch(login(credentials))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
