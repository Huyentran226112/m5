import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('displays the correct sum when the button is clicked', () => {
    const component = shallow(<App />);
    const valueOneInput = screen.getByTestId('value-one-input');
    const valueTwoInput = screen.getByTestId('value-two-input');
    const addButton = screen.getByTestId('button-add');
    const result = screen.getByTestId('result');

    fireEvent.change(valueOneInput, { target: { value: '1' } });
    fireEvent.change(valueTwoInput, { target: { value: '2' } });
    fireEvent.click(addButton);

    expect(result.textContent).toBe('Result: 3');
  });
});

  