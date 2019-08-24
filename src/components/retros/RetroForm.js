import React, { Component } from 'react';
import LabeledFormInput from '../layout/LabeledFormInput';
import { Button, Form, Label, FormGroup, Alert } from 'reactstrap';

import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

import PropTypes from 'prop-types';

class RetroForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.retro ? props.retro.title : '',
            description: props.retro ? props.retro.description : '',
            author: props.retro ? props.retro.author : '',
            createdAt: props.retro ? moment(props.retro.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    handleTitleChange = e => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };

    handleAuthorChange = e => {
        const author = e.target.value;
        this.setState(() => ({ author }));
    };

    handleDescriptionChange = e => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    handleDateChange = createdAt => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    handleFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.title || !this.state.author || !this.state.createdAt) {
            this.setState(() => ({
                error:
                    'Please provide a title, author name and a date for this retro.'
            }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                title: this.state.title,
                author: this.state.author,
                description: this.state.description,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                {this.state.error && (
                    <Alert color="danger">{this.state.error}</Alert>
                )}
                <LabeledFormInput
                    labelText="Retro Board Name*"
                    labelFor="title"
                    inputType="text"
                    inputName="title"
                    inputId="title"
                    value={this.state.title}
                    handleChange={this.handleTitleChange}
                />
                <LabeledFormInput
                    labelText="Author Name*"
                    labelFor="author"
                    inputType="text"
                    inputName="author"
                    inputId="author"
                    value={this.state.author}
                    handleChange={this.handleAuthorChange}
                />
                <LabeledFormInput
                    labelText="Description"
                    labelFor="description"
                    inputType="textarea"
                    inputName="description"
                    inputId="description"
                    inputPlaceHolder="Give your board an (optional) description..."
                    value={this.state.description}
                    handleChange={this.handleDescriptionChange}
                />
                <FormGroup>
                    <Label for="date-picker">Date*</Label>
                    <br />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.handleDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.handleFocusChange}
                        numberOfMonths={1}
                        id="date-picker"
                    />
                </FormGroup>
                <FormGroup>
                    <Button color="primary">Save Retro</Button>
                </FormGroup>
            </Form>
        );
    }
}

RetroForm.propTypes = {
    onSubmit: PropTypes.func,
    retro: PropTypes.object
};

export default RetroForm;
