import React from 'react';
import { shallow } from 'enzyme';
import { AddRetro } from '../../../components/retros/AddRetro';
import RetroForm from '../../../components/retros/RetroForm';
import retros from '../../fixtures/retros';

let addRetro, history, component;

describe('AddRetro component', () => {
    beforeEach(() => {
        addRetro = jest.fn();
        history = {
            push: jest.fn()
        };
        component = shallow(<AddRetro addRetro={addRetro} history={history} />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should handle onSubmit correctly', () => {
        component.find(RetroForm).prop('onSubmit')(retros[1]);
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(addRetro).toHaveBeenLastCalledWith(retros[1]);
    });
});
