import React from 'react';
import renderer from 'react-test-renderer';
import Register from '../../components/auth/Register';

describe('Register component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<Register />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
