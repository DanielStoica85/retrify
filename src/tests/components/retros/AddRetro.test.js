import React from 'react';
import { shallow } from 'enzyme';
import { AddRetro } from '../../../components/retros/AddRetro';
import RetroForm from '../../../components/retros/RetroForm';
import retros from '../../fixtures/retros';

let startAddRetro, history, component;

describe('AddRetro component', () => {
    beforeEach(() => {
        startAddRetro = jest.fn();
        history = {
            push: jest.fn()
        };
        component = shallow(
            <AddRetro startAddRetro={startAddRetro} history={history} />
        );
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should handle onSubmit correctly', () => {
        component.find(RetroForm).prop('onSubmit')(retros[1]);
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(startAddRetro).toHaveBeenLastCalledWith(retros[1]);
    });
});
