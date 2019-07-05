import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';

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
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Add your email..."
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Add your password..."
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Add your first name..."
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Add your last name..."
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary">Sign Up</Button>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

export default Register;
