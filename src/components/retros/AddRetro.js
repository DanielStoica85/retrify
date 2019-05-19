import React, { Component } from 'react';

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
        console.log(this.state);
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add Retro Board</h5>
                    <div className="input-field">
                        <label htmlFor="title">Retro Board Name</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            className="materialize-textarea"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">
                            Add Retro
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddRetro;
