import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const LabeledFormInput = props => {
    const {
        labelText,
        labelFor,
        inputType,
        inputName,
        inputId,
        inputPlaceholder,
        handleChange,
        value
    } = props;
    return (
        <FormGroup>
            <Label for={labelFor}>{labelText}</Label>
            <Input
                type={inputType}
                name={inputName}
                id={inputId}
                placeholder={inputPlaceholder}
                onChange={handleChange}
                value={value}
            />
        </FormGroup>
    );
};

LabeledFormInput.propTypes = {
    labelText: PropTypes.string,
    labelFor: PropTypes.string,
    inputType: PropTypes.string,
    inputName: PropTypes.string,
    inputId: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    handleChange: PropTypes.func,
    value: PropTypes.string
};

export default LabeledFormInput;
