import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../../../components/layout/Navigation';
import { NavbarToggler } from 'reactstrap';

let component;

describe('Navigation component', () => {
    beforeEach(() => {
        component = shallow(<Navigation />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should set isOpen on  navbarToggler click', () => {
        component.find(NavbarToggler).simulate('click');
        expect(component.state('isOpen')).toEqual(true);
        expect(component).toMatchSnapshot();
    });
});
