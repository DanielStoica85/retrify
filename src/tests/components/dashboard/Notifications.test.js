import React from 'react';
import { shallow } from 'enzyme';
import Notifications from '../../../components/dashboard/Notifications';

describe('Notifications component', () => {
    it('should render correctly', () => {
        const component = shallow(<Notifications />);
        expect(component).toMatchSnapshot();
    });
});
