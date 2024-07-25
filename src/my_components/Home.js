import React from 'react'
import bg from "../man.png"

const Home = () => {


    return (
       <section className='text-[#4ECAB0] bg-[#000F16] relative p-6 md:p-10 lg:p-20 bg-cover bg-center'>
        <div className='flex flex-col items-center md:flex-row md:items-start md:justify-between'>
            <div className=' text-[#4ECAB0] relative max-w-2xl mt-6 md:mt-0 md:ml-6 '>
                <p className='font-[100] text-[2rem]'>Hello, </p>
                <span className=' font-mono text-[3rem]'>  <span className='font-serif'> I'm Ravikiran </span><br /> MERN Stack Developer</span>

                <p className='text-lg md:text-2xl lg:text-2xl' >Professional experience in developing scalable website  
                    using a wide range of front-end and back-end 
                    languages like HTML, CSS,Javascript ,Nodejs, MySql.</p>

                <a href='/contact'><button className='bg-white my-1rem py-[1rem] px-[2.5rem] rounded-[2rem]  text-[1rem] text-[#001C29] hover:bg-yellow-300'> Hire Me</button></a>

            </div>
            <div className='flex flex-col items-center md:items-start'>
            <img src={bg} className='md:w-[400px] md:h-[450px]  border border-[#000F16] rounded-[3rem]' />
            </div>
            </div>
        </section>
    )
}

export default Home

