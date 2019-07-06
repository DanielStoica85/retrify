import React from 'react';
import renderer from 'react-test-renderer';
import SignedInLinks from '../../components/layout/SignedInLinks';

describe('SignedInLinks component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<SignedInLinks />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
