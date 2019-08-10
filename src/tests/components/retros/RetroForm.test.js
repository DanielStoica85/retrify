import React from 'react';
import { shallow } from 'enzyme';
import RetroForm from '../../../components/retros/RetroForm';
import LabeledFormInput from '../../../components/layout/LabeledFormInput';
import { Form } from 'reactstrap';
import retros from '../../fixtures/retros';

describe('RetroForm component', () => {
    it('should render correctly', () => {
        const component = shallow(<RetroForm />);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly with expense data', () => {
        const component = shallow(<RetroForm retro={retros[1]} />);
        expect(component).toMatchSnapshot();
    });

    it('should render error for invalid form submission', () => {
        const component = shallow(<RetroForm />);
        component.find(Form).simulate('submit', {
            preventDefault: () => {}
        });
        expect(component.state('error').length).toBeGreaterThan(0);
        expect(component).toMatchSnapshot();
    });

    it('should set retro title on input change', () => {
        const value = 'Retro Title';
        const component = shallow(<RetroForm />);
        component
            .find(LabeledFormInput)
            .at(0)
            .prop('handleChange')({ target: { value } });
        expect(component.state('title')).toBe(value);
    });

    it('should set author name on input change', () => {
        const value = 'Author Name';
        const component = shallow(<RetroForm />);
        component
            .find(LabeledFormInput)
            .at(1)
            .prop('handleChange')({ target: { value } });
        expect(component.state('author')).toBe(value);
    });

    it('should set description on input change', () => {
        const value = 'Description';
        const component = shallow(<RetroForm />);
        component
            .find(LabeledFormInput)
            .at(2)
            .prop('handleChange')({ target: { value } });
        expect(component.state('description')).toBe(value);
    });
});
