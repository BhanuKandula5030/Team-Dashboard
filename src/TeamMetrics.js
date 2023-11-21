import React from 'react';

const TeamMetrics = ({ projectCompletionRate, teamMemberWorkload }) => {
  return (
    <div className="team-metrics card p-4">
      <h2 className="mb-4">Team Metrics</h2>
      <p className="mb-2"><strong>Project Completion Rate:</strong> {projectCompletionRate}%</p>
      <p><strong>Team Member Workload:</strong> {teamMemberWorkload}</p>
    </div>
  );
};

export default TeamMetrics;