import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';

class AddRetro extends Component {
    state = {
        title: '',
        description: ''
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
                    <h4 className="grey-text text-darken-3">Add Retro Board</h4>
                    <FormGroup>
                        <Label for="title">Retro Board Name</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary">Add Retro</Button>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

export default AddRetro;
