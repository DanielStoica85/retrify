import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from '../../../components/layout/Navigation';
import { NavbarToggler } from 'reactstrap';

describe('Navigation component', () => {
    it('should render correctly without user authentified', () => {
        const component = shallow(<Navigation auth={{ uid: null }} />);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly with user authentified', () => {
        const component = shallow(<Navigation auth={{ uid: 'testuid' }} />);
        expect(component).toMatchSnapshot();
    });

    it('should set isOpen on  navbarToggler click', () => {
        const component = shallow(<Navigation auth={{ uid: 'testuid' }} />);
        component.find(NavbarToggler).simulate('click');
        expect(component.state('isOpen')).toEqual(true);
        expect(component).toMatchSnapshot();
    });
});
