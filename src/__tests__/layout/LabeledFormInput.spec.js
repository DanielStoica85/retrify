import React from 'react';
import renderer from 'react-test-renderer';
import LabeledFormInput from '../../components/layout/LabeledFormInput';

describe('LabeledFormInput component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<LabeledFormInput />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
