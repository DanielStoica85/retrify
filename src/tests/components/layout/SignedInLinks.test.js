import React from 'react';
import { shallow } from 'enzyme';
import { SignedInLinks } from '../../../components/layout/SignedInLinks';

const profile = {
    initials: 'ds'
};

describe('SignedInLinks component', () => {
    it('should render correctly', () => {
        const component = shallow(<SignedInLinks profile={profile} />);
        expect(component).toMatchSnapshot();
    });
});
