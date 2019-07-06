import React from 'react';
import renderer from 'react-test-renderer';
import AddRetro from '../../components/retros/AddRetro';

describe('AddRetro component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<AddRetro />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
