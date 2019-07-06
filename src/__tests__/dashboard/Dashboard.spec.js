import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../../components/dashboard/Dashboard';

describe('Dashboard component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<Dashboard />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
