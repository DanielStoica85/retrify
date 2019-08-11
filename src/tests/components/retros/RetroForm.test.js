import React from 'react';
import { shallow } from 'enzyme';
import RetroForm from '../../../components/retros/RetroForm';
import LabeledFormInput from '../../../components/layout/LabeledFormInput';
import { SingleDatePicker } from 'react-dates';
import { Form } from 'reactstrap';
import retros from '../../fixtures/retros';
import moment from 'moment';

describe('RetroForm component', () => {
    it('should render correctly', () => {
        const component = shallow(<RetroForm />);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly with expense data', () => {
        const component = shallow(<RetroForm retro={retros[1]} />);
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

    it('should set new date on date change', () => {
        const now = moment();
        const component = shallow(<RetroForm />);
        component.find(SingleDatePicker).prop('onDateChange')(now);
        expect(component.state('createdAt')).toEqual(now);
    });

    it('should set calendar focus on change', () => {
        const focused = true;
        const component = shallow(<RetroForm />);
        component.find(SingleDatePicker).prop('onFocusChange')({ focused });
        expect(component.state('calendarFocused')).toEqual(focused);
    });

    it('should render error for invalid form submission', () => {
        const component = shallow(<RetroForm />);
        component.find(Form).simulate('submit', {
            preventDefault: () => {}
        });
        expect(component.state('error')).toBe(
            'Please provide a title, author name and a date for this retro.'
        );
        expect(component).toMatchSnapshot();
    });

    it('should call onSubmit prop on valid form submission', () => {
        const onSubmitSpy = jest.fn();
        const component = shallow(
            <RetroForm onSubmit={onSubmitSpy} retro={retros[0]} />
        );
        component.find(Form).simulate('submit', {
            preventDefault: () => {}
        });
        expect(component.state('error')).toBe('');
        expect(onSubmitSpy).toHaveBeenLastCalledWith({
            author: retros[0].author,
            createdAt: retros[0].createdAt,
            description: retros[0].description,
            title: retros[0].title
        });
    });
});
