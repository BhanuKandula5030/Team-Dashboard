import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamMetrics from '../TeamMetrics';

test('renders team metrics correctly', () => {
  const mockMetrics = {
    projectCompletionRate: 80,
    teamMemberWorkload: 'High',
  };

  render(<TeamMetrics {...mockMetrics} />);
  expect(screen.getByText(/Team Metrics/i)).toBeInTheDocument();
  expect(screen.getByText(/Project Completion Rate:/i)).toBeInTheDocument();
  expect(screen.getByText(/80%/i)).toBeInTheDocument();
  expect(screen.getByText(/Team Member Workload:/i)).toBeInTheDocument();
  expect(screen.getByText(/High/i)).toBeInTheDocument();
});