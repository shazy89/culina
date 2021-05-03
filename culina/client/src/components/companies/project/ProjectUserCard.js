import React from "react";

const ProjectUserCard = ({ info: { contactName, projectName, email } }) => {
  return (
    <div className="slider--box">
      <h2>{contactName}</h2>
      <h3>{projectName}</h3>
      <h3>{email}</h3>
    </div>
  );
};

export default ProjectUserCard;
