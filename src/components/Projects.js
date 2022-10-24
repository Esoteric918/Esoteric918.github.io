import React from "react";
import ProjectItem from "./ProjectItem";
import SWL_logo from "../assets/SWL-logo.jpg";
import WOSB_logo from "../assets/WOSB-logo.png";
import air_clone from "../assets/air_clone.jpg";
import holb_waves from "../assets/holb_waves.jpg";

function Projects() {
  return (
        <div id='projects' className='w-full shadow-md shadow-slate-200'>
          <div className='max-w-[1240px] mx-auto px-2 py-16  border-t-slate-300 border-separate'>
            <p className='text-xl tracking-widest uppercase'>
              Projects
            </p>
            <h2 className='py-4 text-yellow-400'>Things I have worked on!</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectItem
                title='Sandwiches With Love'
                backgroundImg={SWL_logo}
                projectUrl={"projectUrl"}
                tech='HTML, Tailwind CSS'
              />
              <ProjectItem
                title='Whats Out Side Bob?'
                backgroundImg={WOSB_logo}
                projectUrl='https://github.com/Esoteric918/whatsoutsidebob'
                tech='MongoBD, MySQL, Python, TypeScript, React, Node.js, TailwindCSS'

              />
              <ProjectItem
                title='Airbnb Clone'
                backgroundImg={air_clone}
                projectUrl='https://github.com/Esoteric918/AirBnB_clone_v3'
                tech='Python, Flask, MySQL, HTML, CSS'

              />
              <ProjectItem
                title='Holberton Waves'
                backgroundImg={holb_waves}
                projectUrl='https://github.com/Esoteric918/holberton-waves'
                tech='Python, Django, MySQL, javaScript, HTML, CSS'
                />
            </div>
          </div>
        </div>
      );
    };

export default Projects;
