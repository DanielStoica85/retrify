import React from 'react';
import { shallow } from 'enzyme';
import { EditRetro } from '../../../components/retros/EditRetro';
import RetroForm from '../../../components/retros/RetroForm';
import retros from '../../fixtures/retros';

let editRetro, history, component, match;

describe('EditRetro component', () => {
    beforeEach(() => {
        editRetro = jest.fn();
        history = {
            push: jest.fn()
        };
        match = {
            params: {
                id: retros[1].id
            }
        };
        component = shallow(
            <EditRetro
                editRetro={editRetro}
                history={history}
                retro={retros[1]}
                match={match}
            />
        );
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should handle onSubmit correctly', () => {
        component.find(RetroForm).prop('onSubmit')(retros[1]);
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(editRetro).toHaveBeenLastCalledWith(retros[1].id, retros[1]);
    });
});
