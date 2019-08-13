import React from 'react';
import { shallow } from 'enzyme';
import Retro from '../../../components/retros/Retro';
import retros from '../../fixtures/retros';

describe('Retro component', () => {
    it('should render correctly', () => {
        const component = shallow(<Retro retro={retros[0]} />);
        expect(component).toMatchSnapshot();
    });
});
