import React from 'react';
import { connect } from 'react-redux';
import { addRetro } from '../../actions/retros';
import { Container } from 'reactstrap';

import RetroForm from './RetroForm';

const EditRetro = props => {
    return (
        <Container>
            <h4 className="grey-text text-darken-3">
                Edit Retro Board with id {props.match.params.id}
            </h4>
            <RetroForm
                onSubmit={retro => {
                    props.dispatch(addRetro(retro));
                    props.history.push('/');
                }}
            />
        </Container>
    );
};

export default connect()(EditRetro);
