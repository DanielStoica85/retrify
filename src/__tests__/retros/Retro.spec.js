import React from 'react';
import renderer from 'react-test-renderer';
import Retro from '../../components/retros/Retro';

describe('Retro component', () => {
    const props = {
        retro: {
            title: 'Test title',
            author: 'Test author',
            date: 'May 20, 2020'
        }
    };
    it('renders correctly', () => {
        const component = renderer.create(<Retro {...props} />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
