import React from 'react';
import renderer from 'react-test-renderer';
import Notifications from '../../components/dashboard/Notifications';

describe('Notifications component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<Notifications />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
