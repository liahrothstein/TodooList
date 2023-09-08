import React from 'react';
import { render, screen } from '@testing-library/react';
import { useGetTodosQuery } from './store';
import App from './App';

test('renders learn react link', () => {
  const { data } = useGetTodosQuery(null);
  render(<App data={data} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
