import React, { Component } from "react";

// create funticional component that will inject project with title and description
// use tailwind to style the project

function ProjectItem(props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-4/5 h-4/5 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full h-2/3 bg-gray-100"></div>
        <div className="w-full h-1/3 p-4">
          <h1 className="text-gray-900 font-bold text-2xl uppercase">
            {props.title}
          </h1>
          <p className="mt-2 text-gray-600">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
