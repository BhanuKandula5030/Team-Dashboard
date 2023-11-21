import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MemberDetail from '../MemberDetail';

test('renders member details correctly with additional info', () => {
    const mockMember = {
      name: 'Bhanu',
      role: 'Backend Developer',
      bio: 'Experienced in building scalable and efficient server-side applications.',
      additionalInfo: 'Skills: Node.js, Express, MongoDB',
    };
  
    render(<MemberDetail {...mockMember} />);
    expect(screen.getByText(/Bhanu/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend Developer/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Experienced in building scalable and efficient server-side applications/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Skills: Node.js, Express, MongoDB/i)).toBeInTheDocument();
  });