import React from 'react';
import { shallow } from 'enzyme';
import RetrosList from '../../../components/retros/RetrosList';
import Retro from '../../../components/retros/Retro';
import retros from '../../fixtures/retros';

describe('RetrosList component', () => {
    it('should render correctly without retros', () => {
        const component = shallow(<RetrosList retros={[]} />);
        expect(component.find(Retro).length).toBe(0);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly with retros', () => {
        const component = shallow(<RetrosList retros={retros} />);
        expect(component.find(Retro).length).toBe(retros.length);
        expect(component).toMatchSnapshot();
    });
});
