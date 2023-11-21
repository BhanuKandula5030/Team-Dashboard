import React from 'react';

const MemberDetail = ({ name, role, bio, additionalInfo }) => {
  return (
    <div className="member-detail">
      <h2>{name}</h2>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Bio:</strong> {bio}</p>
      {additionalInfo && (
        <div>
          <p><strong>Additional Info:</strong> {additionalInfo}</p>
        </div>
      )}
    </div>
  );
};

export default MemberDetail;