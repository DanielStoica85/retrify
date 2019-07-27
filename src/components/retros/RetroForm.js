import React, { Component } from 'react';
import LabeledFormInput from '../layout/LabeledFormInput';
import { Button, Form, FormGroup } from 'reactstrap';

class RetroForm extends Component {
    state = {
        title: '',
        description: '',
        author: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <LabeledFormInput
                    labelText="Retro Board Name"
                    labelFor="title"
                    inputType="text"
                    inputName="title"
                    inputId="title"
                    value={this.state.title}
                    handleChange={this.handleChange}
                />
                <LabeledFormInput
                    labelText="Author Name"
                    labelFor="author"
                    inputType="text"
                    inputName="author"
                    inputId="author"
                    value={this.state.author}
                    handleChange={this.handleChange}
                />
                <LabeledFormInput
                    labelText="Description"
                    labelFor="description"
                    inputType="textarea"
                    inputName="description"
                    inputId="description"
                    inputPlaceHolder="Give your board an (optional) description..."
                    value={this.state.description}
                    handleChange={this.handleChange}
                />
                <FormGroup>
                    <Button color="primary">Add Retro</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default RetroForm;
