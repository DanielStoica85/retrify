import React, { Component } from 'react';
import LabeledFormInput from '../layout/LabeledFormInput';
import { Button, Container, Form, FormGroup } from 'reactstrap';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = e => {
        console.log('It is happening.');
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
                </Form>
            </Container>
        );
    }
}

export default Login;
