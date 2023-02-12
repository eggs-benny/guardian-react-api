import { render, screen } from '@testing-library/react';
import { Feed } from './Feed';

xtest('renders feed', () => {
  render(<Feed />);
  const linkElement = screen.getByText(/Serena Williams Headline/i);
  expect(linkElement).toBeInTheDocument();
});