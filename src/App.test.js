import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App component', () => {
    it('matches the snapshot.', () => {
        const component = renderer.create(<App />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
