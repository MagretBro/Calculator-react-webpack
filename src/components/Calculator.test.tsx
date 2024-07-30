import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('renders calculator and performs calculations', () => {
  render(<Calculator />);
  const input = screen.getByRole('textbox') as HTMLInputElement;
  const button1 = screen.getByText('1');
  const button2 = screen.getByText('2');
  const addButton = screen.getByText('+');
  const equalButton = screen.getByText('=');

  fireEvent.click(button1);
  fireEvent.click(addButton);
  fireEvent.click(button2);
  fireEvent.click(equalButton);

  expect(input.value).toBe('3');
});
