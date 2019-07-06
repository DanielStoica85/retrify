import React from 'react';
import renderer from 'react-test-renderer';
import SignedOutLinks from '../../components/layout/SignedOutLinks';

describe('SignedOutLinks component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<SignedOutLinks />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
