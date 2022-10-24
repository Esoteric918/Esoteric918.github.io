import React, { Component } from "react";
import me from '../assets/me.jpg'

class AboutMe extends Component {
  render() {
    return (
      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 shadow-md shadow-slate-200' >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-gray'>
            About
          </p>
          <h2 className='py-4 text-yellow-500'>Who I Am</h2>
            <p className='py-2 text-gray'>
              I started my journey as a developer in 2021 when I decided to leave a
              job with USPS to pursue my passion for technology. I started Holberton
              School Tulsa, where I learned the fundamentals of software engineering
              and programming.

            </p>
            <p className='py-2 text-gray'>
              I really enjoy building mobile responsive front-end UI applications
              that connect with API’s and backend technologies like Django or MongoBD & MySQL. I’m
              passionate about learning new technologies and understand there is
              more than one way to accomplish a task. Though I am most proficient
              in building front-end applications using HTML, CSS, Javascript, and
              React, I am a quick learner and can pick up new tech stacks as
              needed. I believe that being a great developer is not using one
              specific language, but choosing the best tool for the job. I will
              graduate in 2023 with a full-stack software engineering diploma.
            </p>

          <a href='/#projects'>
            <p className='py-2 text-gra underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </a>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img src={me} className='rounded-full' alt='/' />
        </div>
      </div>
    </div>
  );
};
}
export default AboutMe;
