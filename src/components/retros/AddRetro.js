import React from 'react';
import { connect } from 'react-redux';
import { addRetro } from '../../actions/retros';
import { Container } from 'reactstrap';
import RetroForm from './RetroForm';

export class AddRetro extends React.Component {
    handleSubmit = retro => {
        this.props.handleSubmit(retro);
        this.props.history.push('/');
    };

    render() {
        return (
            <Container>
                <h4 className="grey-text text-darken-3">Add Retro Board</h4>
                <RetroForm onSubmit={this.handleSubmit} />
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: retro => dispatch(addRetro(retro))
    };
};

export default connect(
    undefined,
    mapDispatchToProps
)(AddRetro);
