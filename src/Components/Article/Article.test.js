import { render, screen } from '@testing-library/react';
import { Article } from './Article'

test('renders article headline', () => {
  render(<Article />);
  const linkElement = screen.getByText(/Serena Williams Headline/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders article image', () => {
  render(<Article />);
  const linkElement = screen.getByRole(/img/i)
  expect(linkElement).toBeInTheDocument();
});
