import React from 'react';
import { shallow } from 'enzyme';
import RetrosList from '../../../components/retros/RetrosList';
import retros from '../../fixtures/retros';

describe('RetrosList component', () => {
    it('should render correctly without retros', () => {
        const component = shallow(<RetrosList retros={[]} />);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly with retros', () => {
        const component = shallow(<RetrosList retros={retros} />);
        expect(component).toMatchSnapshot();
    });
});
