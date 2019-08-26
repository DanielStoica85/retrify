import React from 'react';
import { shallow } from 'enzyme';
import SignedInLinks from '../../../components/layout/SignedInLinks';

describe('SignedInLinks component', () => {
    it('should render correctly', () => {
        const component = shallow(<SignedInLinks />);
        expect(component).toMatchSnapshot();
    });
});
