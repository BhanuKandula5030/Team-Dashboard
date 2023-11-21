import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectDetail from '../ProjectDetail';

test('renders project details correctly', () => {
  const mockProject = {
    projectName: 'Global Grad Team Payments',
    status: 'In Progress',
    description: 'Developing a new payment feature for the application',
    progressStatus: '50%',
    projectGoals: 'Complete payment feature development, conduct user testing',
  };

  render(<ProjectDetail {...mockProject} />);
  expect(screen.getByText(/Global Grad Team Payments/i)).toBeInTheDocument();
  expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
  expect(screen.getByText(/Developing a new payment feature for the application/i)).toBeInTheDocument();
  expect(screen.getByText(/50%/i)).toBeInTheDocument();
  expect(screen.getByText(/Complete payment feature development, conduct user testing/i)).toBeInTheDocument();
});