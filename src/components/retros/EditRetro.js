import React from 'react';
import { connect } from 'react-redux';
import { editRetro } from '../../actions/retros';
import { Container } from 'reactstrap';

import RetroForm from './RetroForm';

const EditRetro = props => {
    return (
        <Container>
            <h4 className="grey-text text-darken-3">
                Edit Retro Board with id {props.match.params.id}
            </h4>
            <RetroForm
                retro={props.retro}
                onSubmit={retro => {
                    props.dispatch(editRetro(props.retro.id, retro));
                    props.history.push('/');
                }}
            />
        </Container>
    );
};

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    return {
        retro: state.retros.find(retro => retro.id.toString() === id)
    };
};

export default connect(mapStateToProps)(EditRetro);
