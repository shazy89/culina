import React from "react";

const ProjectUserCard = ({ projectName, contactName, email }) => {
  return (
    <div className="slider--box">
      <h2>{contactName}</h2>
      <h3>{projectName}</h3>
      <h3>{email}</h3>
    </div>
  );
};

export default ProjectUserCard;
