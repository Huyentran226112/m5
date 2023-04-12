import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
    
describe('App component', () => {
    it('Should render without errors', () => {
        const component = shallow(<App />);
        const wrapper = component.find('.app-pages');
        expect(wrapper.length).toBe(1);
    })
})