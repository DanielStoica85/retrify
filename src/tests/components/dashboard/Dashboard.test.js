import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../../../components/dashboard/Dashboard';

describe('Dashboard component', () => {
    it('should render correctly', () => {
        const component = shallow(<Dashboard />);
        expect(component).toMatchSnapshot();
    });
});
