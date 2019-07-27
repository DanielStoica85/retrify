import React, { Component } from 'react';
import { Container } from 'reactstrap';

import RetroForm from './RetroForm';

class AddRetro extends Component {
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

    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <Container>
                <h4 className="grey-text text-darken-3">Add Retro Board</h4>
                <RetroForm />
            </Container>
        );
    }
}

export default AddRetro;
