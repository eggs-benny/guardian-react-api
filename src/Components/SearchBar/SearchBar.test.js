import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar'

test('renders Search', () => {
  render(<SearchBar />);
  const linkElement = screen.getByText(/SEARCH/i);
  expect(linkElement).toBeInTheDocument();
});
