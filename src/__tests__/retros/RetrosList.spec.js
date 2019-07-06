import React from 'react';
import renderer from 'react-test-renderer';
import RetrosList from '../../components/retros/RetrosList';

describe('RetrosList component', () => {
    const props = {
        retros: [
            {
                title: 'Some title',
                author: 'Some author',
                date: 'May 10th, 2019',
                id: 1
            },
            {
                title: 'Some title',
                author: 'Some author',
                date: 'May 10th, 2019',
                id: 2
            },
            {
                title: 'Some title',
                author: 'Some author',
                date: 'May 10th, 2019',
                id: 3
            }
        ]
    };
    it('renders correctly', () => {
        const component = renderer.create(<RetrosList {...props} />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
