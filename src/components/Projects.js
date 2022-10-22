import React from "react";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectItem title="Project 1" description="This is project 1" />
      <ProjectItem title="Project 2" description="This is project 2" />
      <ProjectItem title="Project 3" description="This is project 3" />
      <ProjectItem title="Project 4" description="This is project 4" />
    </div>
  );
}

export default Projects;
