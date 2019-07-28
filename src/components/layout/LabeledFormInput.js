import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

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

export default LabeledFormInput;
