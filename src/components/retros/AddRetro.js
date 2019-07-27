import React from 'react';
import { Container } from 'reactstrap';

import RetroForm from './RetroForm';

const AddRetro = () => {
    return (
        <Container>
            <h4 className="grey-text text-darken-3">Add Retro Board</h4>
            <RetroForm />
        </Container>
    );
};

export default AddRetro;
