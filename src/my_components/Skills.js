import React from 'react'

const Skills = () => {

    const skills = [
        { name: 'JavaScript', level: 'Advanced', proficiency: 90 },
        { name: 'React', level: 'Advanced', proficiency: 85 },
        { name: 'Tailwind CSS', level: 'Intermediate', proficiency: 70 },
        { name: 'Node.js', level: 'Advanced', proficiency: 85 },
        { name: 'Express', level: 'Intermediate', proficiency: 70 },
        { name: 'MySQL', level: 'Advanced', proficiency: 85 },
      ];


  return (
    <section className='text-[#4ECAB0] bg-[#000F16] relative p-6 md:p-10 lg:p-5  bg-cover bg-center'>
        <p className='text-center font-[130] text-[50px]'>Skills</p>
        
        <div className="container mx-auto px-4">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {skills.map((skill, index) => (
            <div key={index} className="bg-[#000F16] p-6 rounded border-2 border-lime-400 transition duration-500 hover:scale-110" >
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-[#FECD75]">{skill.level}</p>
              <div className="pt-1">
                <div className=" h-2 mb-4  flex rounded bg-gray-200">
                  <div style={{ width: `${skill.proficiency}%` }} className=" flex flex-col text-center  bg-blue-500"></div>
                </div>
                <p className="text-[#FECD75]">{skill.proficiency}% Proficiency</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        
        
    </section>
  )
}

export default Skills
