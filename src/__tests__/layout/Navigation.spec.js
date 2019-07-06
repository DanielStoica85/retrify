import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '../../components/layout/Navigation';

describe('Navigation component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<Navigation />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
