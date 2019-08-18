import React, { Component } from 'react';
import LabeledFormInput from '../layout/LabeledFormInput';
import LabeledFormSelect from '../layout/LabeledFormSelect';
import { Button, Form, Label, FormGroup, Alert } from 'reactstrap';

import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class RetroForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.retro ? props.retro.title : '',
            description: props.retro ? props.retro.description : '',
            author: props.retro ? props.retro.author : '',
            type: props.retro ? props.retro.type : '',
            createdAt: props.retro ? moment(props.retro.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleTypeChange = e => {
        const type = e.target.value;
        if (type !== 'Select') {
            this.setState({ type });
        } else {
            this.setState({ type: '' });
        }
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
        if (
            !this.state.title ||
            !this.state.author ||
            !this.state.createdAt ||
            !this.state.type
        ) {
            this.setState(() => ({
                error:
                    'Please provide a title, author name, retro type and a date for this retro.'
            }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                title: this.state.title,
                author: this.state.author,
                description: this.state.description,
                type: this.state.type,
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
                    handleChange={this.handleChange}
                />
                <LabeledFormInput
                    labelText="Author Name*"
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
                <LabeledFormSelect
                    labelText="Type of Retrospective*"
                    labelFor="type"
                    inputType="select"
                    inputName="type"
                    inputId="type"
                    value={this.state.type}
                    options={[
                        'Select',
                        'What went well / What did not go well',
                        'Start / Stop / Continue'
                    ]}
                    handleChange={this.handleTypeChange}
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

export default RetroForm;
