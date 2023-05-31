//unit testing for counter function using useState
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './counter';

test('increments the counter', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText('Increment');
  const countText = getByText('Count: 0');

  fireEvent.click(incrementButton);

  expect(countText.textContent).toBe('Count: 1');
});
