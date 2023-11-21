import React from 'react';
import Card from 'react-bootstrap/Card';

const TeamMember = ({ name, role, bio, onClick }) => {
  return (
    <Card className="team-member" onClick={onClick}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text><strong>Role:</strong> {role}</Card.Text>
        <Card.Text><strong>Bio:</strong> {bio}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TeamMember;