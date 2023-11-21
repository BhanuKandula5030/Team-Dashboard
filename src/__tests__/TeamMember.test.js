import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import TeamMember from '../TeamMember';

test('renders team member details correctly', () => {
  const mockMember = {
    name: 'Bhanu',
    role: 'Backend Developer',
    bio: 'Experienced in building scalable and efficient server-side applications.',
  };

  render(<TeamMember {...mockMember} />);
  expect(screen.getByText(/Bhanu/i)).toBeInTheDocument();
  expect(screen.getByText(/Backend Developer/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Experienced in building scalable and efficient server-side applications/i)
  ).toBeInTheDocument();
});