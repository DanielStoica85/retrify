import React from 'react';
import { shallow } from 'enzyme';
import RetroForm from '../../../components/retros/RetroForm';
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
});
