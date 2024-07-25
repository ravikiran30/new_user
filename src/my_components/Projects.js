import React from 'react'
import image1 from '../project1.png'
import image2 from '../project2.png'
import image3 from '../project3.png'

const Projects = () => {

    const projects = [
        {
            title: 'Words per Minute Calculator',
            description: "The WPM calculator is a web application that measures a user's typing speed in words per minute." ,
            image: image1, 
            link: 'https://github.com/ravikiran30/WPM-calculator'
        },
        {
            title: 'Internship Management System ',
            description: "Collaborated with a cross-functional team to design and implement key features, including user authentication,application management, and reporting functionalities, ensuring alignment with project requirements" ,
            image: image2, 
            link: ''
        },
        {
            title: 'Pokemon Team Builder',
            description: "Developed a Pokemon team builder application using Node.js to create a RESTful API for managing Pokemon data and React for the front-end, enabling users to build and view customized Pokemon teams with a responsive and interactive interface." ,
            image:image3, 
            link: ''
        }
    ];

    return (
        <section className='text-[#4ECAB0] bg-[#000F16] relative p-6 md:p-10 lg:p-5 bg-cover bg-center  '>
            <p className='text-center font-[130] text-[50px]'>Projects</p>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <div key={index} className="border-2 border-lime-400 p-6 rounded transition duration-500 hover:scale-105">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-slate-200 mb-4">{project.description}</p>
                            <a href={project.link} className="text-blue-500 hover:text-blue-700">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>




        </section>
    )
}

export default Projects
