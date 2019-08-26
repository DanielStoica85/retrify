import React from 'react';
import { shallow } from 'enzyme';
import SignedOutLinks from '../../../components/layout/SignedOutLinks';

describe('SignedInLinks component', () => {
    it('should render correctly', () => {
        const component = shallow(<SignedOutLinks />);
        expect(component).toMatchSnapshot();
    });
});
