import React, { Component } from 'react';
import LabeledFormInput from '../layout/LabeledFormInput';
import { Button, Container, Form, FormGroup } from 'reactstrap';

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
                    <LabeledFormInput
                        labelText="Retro Board Name"
                        labelFor="title"
                        inputType="text"
                        inputName="title"
                        inputId="title"
                        handleChange={this.handleChange}
                    />
                    <LabeledFormInput
                        labelText="Description"
                        labelFor="description"
                        inputType="textarea"
                        inputName="description"
                        inputId="description"
                        inputPlaceHolder="Give your board a description..."
                        handleChange={this.handleChange}
                    />
                    <FormGroup>
                        <Button color="primary">Add Retro</Button>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

export default AddRetro;
