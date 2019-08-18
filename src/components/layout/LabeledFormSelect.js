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
        handleChange,
        options
    } = props;

    const typeOptions =
        options &&
        options.map(option => {
            return <option key={option}>{option}</option>;
        });
    return (
        <FormGroup>
            <Label for={labelFor}>{labelText}</Label>
            <Input
                type={inputType}
                name={inputName}
                id={inputId}
                onChange={handleChange}
            >
                {typeOptions}
            </Input>
        </FormGroup>
    );
};

LabeledFormInput.propTypes = {
    labelText: PropTypes.string,
    labelFor: PropTypes.string,
    inputType: PropTypes.string,
    inputName: PropTypes.string,
    inputId: PropTypes.string,
    handleChange: PropTypes.func,
    options: PropTypes.array
};

export default LabeledFormInput;
