import React from 'react'

const Education = () => {
  return (
    <section className='text-[#4ECAB0] bg-[#000F16] relative p-6 md:p-10 lg:p-5 bg-cover bg-center '>
        <p className='text-center font-[130] text-[50px]'>Education</p>
        
          <div className='grid sm:grid-cols-1 md:grid-cols-1 gap-8 px-12 sm:px-[15rem]'>
        <div className='border-4  border-teal-400 text-[18px]  text-left p-[1rem] rounded-[30px]'>
            <p className='text-[2rem] text-[#a3e635]'>BMS Institute Of Technology</p>
            <p> B.E in Information Science & Engineering</p><p>2019-2023</p>
            <p> CGPA-8.3</p>
        </div>
        <div className='border-4  border-teal-400 text-[18px]  text-left p-[1rem] rounded-[30px]'>
            <p className='text-[2rem] text-[#a3e635]'>Vidya Jyothi PU College</p>
            <p> PCMC's</p><p>2017-2019</p>
            <p> Percentage- 83.2%</p>
        </div>
        <div className='border-4  border-teal-400 text-[18px]  text-left p-[1rem] rounded-[30px]'>
            <p className='text-[2rem] text-[#a3e635]'>MSV Public School</p>
            <p> Class-10th ,CBSE Board</p><p>2017</p>
            <p> CGPA-9.6</p>
        </div>
        
        </div>
        
       
        
        
    </section>
  )
}

export default Education
