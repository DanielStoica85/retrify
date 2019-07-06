import React from 'react';
import renderer from 'react-test-renderer';
import RetroDetails from '../../components/retros/RetroDetails';

describe('RetroDetails component', () => {
    const props = {
        match: {
            params: {
                id: 123
            }
        }
    };
    it('renders correctly', () => {
        const component = renderer.create(<RetroDetails {...props} />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
