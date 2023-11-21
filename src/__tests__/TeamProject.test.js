import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import userEvent from '@testing-library/user-event'; 
import TeamProject from '../TeamProject';

test('renders team project details correctly', () => {
  const mockProject = {
    projectName: 'Global Grad Team Payments',
    status: 'In Progress',
    description: 'Developing a new payment feature for the application.',
  };

  const mockHandleClick = jest.fn();

  render(<TeamProject {...mockProject} onClick={mockHandleClick} />);
  expect(screen.getByText(/Global Grad Team Payments/i)).toBeInTheDocument();
  expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
  expect(screen.getByText(/Developing a new payment feature for the application/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/Global Grad Team Payments/i));
  expect(mockHandleClick).toHaveBeenCalled();
});