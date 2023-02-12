import React from 'react'
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders App link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Guardian/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Search in app', () => {
  render(<App />);
  const linkElement = screen.getByText(/SEARCH/i);
  expect(linkElement).toBeInTheDocument();
});
