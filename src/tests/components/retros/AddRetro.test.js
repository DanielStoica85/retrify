import React from 'react';
import { shallow } from 'enzyme';
import { AddRetro } from '../../../components/retros/AddRetro';
import RetroForm from '../../../components/retros/RetroForm';
import retros from '../../fixtures/retros';

let handleSubmit, history, component;

describe('AddRetro component', () => {
    beforeEach(() => {
        handleSubmit = jest.fn();
        history = {
            push: jest.fn()
        };
        component = shallow(
            <AddRetro handleSubmit={handleSubmit} history={history} />
        );
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should handle onSubmit correctly', () => {
        component.find(RetroForm).prop('onSubmit')(retros[1]);
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(handleSubmit).toHaveBeenLastCalledWith(retros[1]);
    });
});
