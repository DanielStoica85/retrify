import React from 'react';
import { shallow } from 'enzyme';
import LabeledFormInput from '../../../components/layout/LabeledFormInput';

describe('SignedInLinks component', () => {
    it('should render correctly', () => {
        const component = shallow(<LabeledFormInput />);
        expect(component).toMatchSnapshot();
    });
});
