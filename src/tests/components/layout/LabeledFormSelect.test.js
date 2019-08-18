import React from 'react';
import { shallow } from 'enzyme';
import LabeledFormSelect from '../../../components/layout/LabeledFormSelect';

describe('LabeledFormInput component', () => {
    const props = {
        labelText: 'Type of Retrospective',
        labelFor: 'type',
        inputType: 'select',
        inputName: 'type',
        inputId: 'type',
        handleChange: jest.fn(),
        options: [
            'What went well / What did not go well',
            'Start / Stop / Continue'
        ]
    };
    it('should render correctly', () => {
        const component = shallow(<LabeledFormSelect {...props} />);
        expect(component).toMatchSnapshot();
    });
});
