import React, { Component } from 'react';
import LabeledFormInput from '../layout/LabeledFormInput';
import { Button, Form, Label, FormGroup } from 'reactstrap';

import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class RetroForm extends Component {
    state = {
        title: '',
        description: '',
        author: '',
        createdAt: moment(),
        calendarFocused: false
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleDateChange = createdAt => {
        this.setState(() => ({ createdAt }));
    };

    handleFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
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
                    <Label for="date-picker">Date</Label>
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
                    <Button color="primary">Add Retro</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default RetroForm;
