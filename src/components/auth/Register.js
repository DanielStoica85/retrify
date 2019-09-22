import React, { Component } from 'react';
import LabeledFormInput from '../layout/LabeledFormInput';
import { Button, Container, Form, FormGroup, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { signUp } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

class Register extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        error: ''
    };

    handleEmailChange = e => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    handlePasswordChange = e => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    handleFirstNameChange = e => {
        const firstName = e.target.value;
        this.setState(() => ({ firstName }));
    };

    handleLastNameChange = e => {
        const lastName = e.target.value;
        this.setState(() => ({ lastName }));
    };

    handleSubmit = e => {
        e.preventDefault();
        if (
            !this.state.email ||
            !this.state.password ||
            !this.state.firstName ||
            !this.state.lastName
        ) {
            this.setState(() => ({
                error:
                    'Please provide your email, password, first name and last name.'
            }));
        } else {
            this.props.signUp(this.state);
            this.setState(() => ({
                error: ''
            }));
        }
    };

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to="/" />;
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <h4 className="text-black">Sign Up</h4>
                    <LabeledFormInput
                        labelText="Email*"
                        labelFor="email"
                        inputType="email"
                        inputName="email"
                        inputId="email"
                        inputPlaceholder="Add your email..."
                        handleChange={this.handleEmailChange}
                    />
                    <LabeledFormInput
                        labelText="Password*"
                        labelFor="password"
                        inputType="password"
                        inputName="password"
                        inputId="password"
                        inputPlaceholder="Add your password..."
                        handleChange={this.handlePasswordChange}
                    />
                    <LabeledFormInput
                        labelText="First Name*"
                        labelFor="firstName"
                        inputType="text"
                        inputName="firstName"
                        inputId="firstName"
                        inputPlaceholder="Add your first name..."
                        handleChange={this.handleFirstNameChange}
                    />
                    <LabeledFormInput
                        labelText="Last Name*"
                        labelFor="lastName"
                        inputType="text"
                        inputName="lastName"
                        inputId="lastName"
                        inputPlaceholder="Add your last name..."
                        handleChange={this.handleLastNameChange}
                    />
                    <FormGroup>
                        <Button color="primary">Sign Up</Button>
                    </FormGroup>
                    {this.state.error && (
                        <Alert color="danger">{this.state.error}</Alert>
                    )}
                    {authError && <Alert color="danger">{authError}</Alert>}
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signUp: newUser => dispatch(signUp(newUser))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
