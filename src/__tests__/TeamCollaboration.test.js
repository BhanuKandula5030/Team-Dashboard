import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamCollaboration from '../TeamCollaboration';

test('renders TeamCollaboration component correctly', () => {
  render(<TeamCollaboration />);
  expect(screen.getByText(/Team Collaboration/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Type your message.../i)).toBeInTheDocument();
  expect(screen.getByText(/Send/i)).toBeInTheDocument();
});

test('allows user to send messages', () => {
  render(<TeamCollaboration />);
  fireEvent.change(screen.getByPlaceholderText(/Type your message.../i), {
    target: { value: 'Hello, team!' },
  });
  fireEvent.click(screen.getByText(/Send/i));
  expect(screen.getByText(/Hello, team!/i)).toBeInTheDocument();
});
test('does not allow sending empty messages', () => {
  render(<TeamCollaboration />);
  fireEvent.click(screen.getByText(/Send/i));
  expect(screen.queryByRole('listitem')).toBeNull();
});