import React from 'react';
import Card from 'react-bootstrap/Card';

const ProjectDetail = ({ projectName, status, description, progressStatus, projectGoals }) => {
  return (
    <Card className="project-detail">
      <Card.Body>
        <Card.Title>{projectName}</Card.Title>
        <Card.Text><strong>Status:</strong> {status}</Card.Text>
        <Card.Text><strong>Description:</strong> {description}</Card.Text>
        <Card.Text><strong>Progress Status:</strong> {progressStatus}</Card.Text>
        <Card.Text><strong>Project Goals:</strong> {projectGoals}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectDetail;