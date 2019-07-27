import React from 'react';
import { connect } from 'react-redux';
import { addRetro } from '../../actions/retros';
import { Container } from 'reactstrap';

import RetroForm from './RetroForm';

const AddRetro = props => {
    return (
        <Container>
            <h4 className="grey-text text-darken-3">Add Retro Board</h4>
            <RetroForm
                onSubmit={retro => {
                    props.dispatch(addRetro(retro));
                    props.history.push('/');
                }}
            />
        </Container>
    );
};

export default connect()(AddRetro);
