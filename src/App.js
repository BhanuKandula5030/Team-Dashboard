import React from 'react';
import { Container, Row, Col, Nav, Form, Button, Modal } from 'react-bootstrap';
import TeamMember from './TeamMember';
import TeamProject from './TeamProject';
import TeamMetrics from './TeamMetrics';
import TeamCollaboration from './TeamCollaboration';
import MemberDetail from './MemberDetail';
import ProjectDetail from './ProjectDetail';
import { AuthProvider, useAuth } from './Authenticator';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const teamMembers = [
  {
    name: 'Krishna',
    role: 'Frontend Developer',
    bio: 'Passionate about creating user interacting websites and web applications user interface',
    additionalInfo: 'Skills: React, JavaScript, HTML, CSS',
  },
  {
    name: 'Bhanu ',
    role: 'Backend Developer',
    bio: 'Experienced in building scalable and efficient server-side applications.',
    additionalInfo: 'Skills: Node.js, Express, MongoDB',
  },
  {
    name: 'Daniel Shown',
    role: 'Team Lead',
    bio: 'Experienced in coordination of team projects and business process.',
    additionalInfo: 'Skills: Project Management, Team Collaboration',
  },
];

const ongoingProjects = [
  {
    projectName: 'Global Grad Team Payments ',
    status: 'In Progress',
    description: 'Developing a new payment feature for the application.',
  },
  {
    projectName: 'ask SLU Employee portal',
    status: 'Pending',
    description: 'Planning phase for Employee portal project.',
  },
];

const projectDetails = [
  {
    projectName: 'Global Grad Team Payments',
    status: 'In Progress',
    description: 'Developing a new payment feature for the application',
    progressStatus: '50%',
    projectGoals: 'Complete payment feature development, conduct user testing.',
  },
  {
    projectName: 'ask SLU Employee portal',
    status: 'Pending',
    description: 'Planning phase for the Employee portal project.',
    progressStatus: '70%',
    projectGoals: 'Define project scope, gather requirements of the ask SLU.',
  },
];

const teamMetricsData = {
  projectCompletionRate: 60,
  teamMemberWorkload: 'Balanced',
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

const AppContent = () => {
  const { user, login, logout } = useAuth();
  const [selectedTab, setSelectedTab] = React.useState('teamMembers');
  const [selectedMember, setSelectedMember] = React.useState(null);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [loginData, setLoginData] = React.useState({ username: '', password: '' });
  const [showLoginModal, setShowLoginModal] = React.useState(false);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setSelectedMember(null);
    setSelectedProject(null);
  };

  const handleMemberClick = (member) => {
    if (user) {
      setSelectedMember(member);
    } else {
      setShowLoginModal(true);
    }
    setSelectedProject(null);
  };

  const handleProjectClick = (project) => {
    if (user) {
      setSelectedProject(project);
    } else {
      setShowLoginModal(true);
    }
    setSelectedMember(null);
  };

  const handleLogin = () => {
    login(loginData.username, loginData.password);
    setLoginData({ username: '', password: '' });
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    logout();
    setShowLoginModal(false);
  };

  return (
    <Container fluid className="App">
      <Row>
        <Col>
          <h1>Team Dashboard</h1>
        </Col>
        <Col>
          {user ? (
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="primary" onClick={() => setShowLoginModal(true)}>
              Login
            </Button>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav variant="tabs" className="slide-bar">
            <Nav.Item>
              <Nav.Link
                className={selectedTab === 'teamMembers' ? 'active' : ''}
                onClick={() => handleTabChange('teamMembers')}
              >
                Team Members
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={selectedTab === 'ongoingProjects' ? 'active' : ''}
                onClick={() => handleTabChange('ongoingProjects')}
              >
                Ongoing Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={selectedTab === 'teamMetrics' ? 'active' : ''}
                onClick={() => handleTabChange('teamMetrics')}
              >
                Team Metrics
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={selectedTab === 'teamCollaboration' ? 'active' : ''}
                onClick={() => handleTabChange('teamCollaboration')}
              >
                Team Collaboration
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Col>
            {selectedTab === 'teamMembers' && (
              <div className="team-members">
                {teamMembers.map((member, index) => (
                  <TeamMember key={index} {...member} onClick={() => handleMemberClick(member)} />
                ))}
              </div>
            )}

            {selectedTab === 'ongoingProjects' && (
              <div className="team-projects">
                {ongoingProjects.map((project, index) => (
                  <TeamProject
                    key={index}
                    {...project}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            )}

            {selectedTab === 'teamMetrics' && (
              <div>
                <TeamMetrics {...teamMetricsData} />
              </div>
            )}

            {selectedTab === 'teamCollaboration' && (
              <div>
                <TeamCollaboration />
              </div>
            )}
          </Col>
        </Col>

        <Col>
          {selectedMember && (
            <div>
              <MemberDetail {...selectedMember} />
            </div>
          )}
          {selectedProject && (
            <div>
              <ProjectDetail {...selectedProject} />
            </div>
          )}
        </Col>
      </Row>
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername" className="mr-2">
              <Form.Control
                type="text"
                placeholder="Username"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mr-2">
              <Form.Control
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default App;