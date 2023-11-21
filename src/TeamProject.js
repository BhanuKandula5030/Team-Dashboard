import React from 'react';
import Card from 'react-bootstrap/Card';

const TeamProject = ({ projectName, status, description, onClick }) => {
  return (
    <Card className="team-project" onClick={onClick}>
      <Card.Body>
        <Card.Title>{projectName}</Card.Title>
        <Card.Text><strong>Status:</strong> {status}</Card.Text>
        <Card.Text><strong>Description:</strong> {description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TeamProject;