import React, { Component } from 'react';
import LabeledFormInput from '../layout/LabeledFormInput';
import { Button, Container, Form, FormGroup } from 'reactstrap';

class Register extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <h4 className="text-black">Sign Up</h4>
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
                    <LabeledFormInput
                        labelText="First Name"
                        labelFor="firstName"
                        inputType="text"
                        inputName="firstName"
                        inputId="firstName"
                        inputPlaceholder="Add your first name..."
                        handleChange={this.handleChange}
                    />
                    <LabeledFormInput
                        labelText="Last Name"
                        labelFor="lastName"
                        inputType="text"
                        inputName="lastName"
                        inputId="lastName"
                        inputPlaceholder="Add your last name..."
                        handleChange={this.handleChange}
                    />
                    <FormGroup>
                        <Button color="primary">Sign Up</Button>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

export default Register;
