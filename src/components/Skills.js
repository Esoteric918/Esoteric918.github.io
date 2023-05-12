import html from '../assets/html5.png';
import faPython from '../assets/Python.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/React-icon2.png';
import Tailwind from '../assets/tailwind.png';
import Github from '../assets/github.png';
import django from '../assets/django.png';
import TypeScript from '../assets/TypeScript.png';



const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase'>
          Skills
        </p>
        <h2 className='py-4 text-yellow-400'>Languages and Frameworks I have worked with and links to my GitHub Repos.</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl shadow-slate-300 dark:shadow-xl dark:shadow-slate-400 rounded-xl hover:scale-105 ease-in duration-300'>
          <a href='https://github.com/Esoteric918/holberton-waves' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </a>
          </div>
          <div className='p-6 shadow-xl  shadow-slate-300 dark:shadow-xl dark:shadow-slate-400 rounded-xl hover:scale-105 ease-in duration-300'>
          <a href='https://github.com/Esoteric918/holbertonschool-the-joy-of-painting-api' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={faPython} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </a>
          </div>
          <div className='p-6 shadow-xl  shadow-slate-300 dark:shadow-xl dark:shadow-slate-400 rounded-xl hover:scale-105 ease-in duration-300'>
          <a href='https://github.com/Esoteric918/holbertonschool-files_manager' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </a>
          </div>
          <div className='p-6 shadow-xl  shadow-slate-300 dark:shadow-xl dark:shadow-slate-400 rounded-xl hover:scale-105 ease-in duration-300'>
          <a href='https://github.com/Esoteric918/holbertonschool-web_react' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </a>
          </div>
          <div className='p-6 shadow-xl  shadow-slate-300 dark:shadow-xl dark:shadow-slate-400 rounded-xl hover:scale-105 ease-in duration-300'>
          <a href='https://github.com/Esoteric918/SWL-project' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </a>
          </div>
          <div className='p-6 shadow-xl  shadow-slate-300 dark:shadow-xl dark:shadow-slate-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <a href='https://github.com/Esoteric918/BackEnd-projects' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={django} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Django</h3>
              </div>
            </div>
            </a>
          </div>
          <div className='p-6 shadow-xl  shadow-slate-300 dark:shadow-xl dark:shadow-slate-400 rounded-xl hover:scale-105 ease-in duration-300'>
          <a href='https://github.com/Esoteric918' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </a>
          </div>
          <div className='p-6 shadow-xl  shadow-slate-300 rounded-xl hover:scale-105 ease-in duration-300'>
            <a href='https://github.com/Esoteric918/GarMint-Capstone' >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={TypeScript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TypeScript</h3>
              </div>
            </div>
         </a>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
