import React from 'react'




export default function ProjectItem({ title, backgroundImg, projectUrl, tech }) {
    return (
        <div className="relative flex flex-col items-center justify-center h-96">
            <img src={backgroundImg} alt={title} className="absolute object-cover w-full h-full" />
            <div className="absolute flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="text-sm text-white">{tech}</p>
                <a href={projectUrl} className="px-4 py-2 mt-4 text-sm text-white bg-[#5651e5] rounded hover:bg-[#6b66e5]">View Project</a>
            </div>
        </div>
    )
}
