import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dinner icons created by monkik - Flaticon/i);
  expect(linkElement).toBeInTheDocument();
});
