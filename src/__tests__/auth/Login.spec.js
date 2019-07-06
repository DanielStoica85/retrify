import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../components/auth/Login';

describe('Login component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<Login />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
