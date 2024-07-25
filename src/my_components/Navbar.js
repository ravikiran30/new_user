// import React from 'react'

// const Navbar = () => {
//   return (
//     <>
//     <nav className='font-semibold p-[14px] flex bg-[#001C29] text-[#4ECAB0] sticky top-0 z-[2] hidden md:flex ' >
//         <span className='flex flex-row  grow-[2] justify-start  ' >
//             <a href='/' className='p-[10px]'> Home</a>
//             {/* <a href='/' className='p-[10px]'> About Me</a> */}
//             <a href='/education' className='p-[10px]'> Education</a>
//             <a href='/skills'className='p-[10px]'> Skills</a>
//             <a href='/projects' className='p-[10px]'> Projects</a>
//             <a href='/contact' className='p-[10px]'> Contact</a>
            
//             <a href='#' className='p-[10px] ' >Resume </a>
//         </span>
//     </nav>
//     <nav className='font-semibold p-[14px] flex bg-[#001C29] text-[#4ECAB0] sticky top-0 z-[2] md:hidden' >
//     <span className='flex flex-row  grow-[2] justify-start  ' >
//         <a href='/' className='p-[10px]'> Home</a>
//         {/* <a href='/' className='p-[10px]'> About Me</a> */}
//         <a href='/education' className='p-[10px]'> Education</a>
//         <a href='/skills'className='p-[10px]'> Skills</a>
//         <a href='/projects' className='p-[10px]'> Projects</a>
//         <a href='/contact' className='p-[10px]'> Contact</a>
        
//         <a href='https://drive.google.com/file/d/1tluvVxv0_4fo2J3SS0mmxNAHo6T7DZcj/view?usp=sharing' className='p-[10px] ' >Resume </a>
//     </span>
//   </nav>
//   </>




//   )
// }

// export default Navbar


import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-[#001C29] text-[#4ECAB0] sticky top-0  z-[2] px-[2rem] py-[1rem] text-[1.25rem]">
      <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-10">
        {[
          { to: "/", label: "About Me" },
          { to: "/education", label: "Education" },
          { to: "/projects", label: "Projects" },
          { to: "/skills", label: "Skills" },
          { to: "/contact", label: "Contact" },
          { to: "", label: "Resume" },
        ].map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`hover:text-blue-50 ${
                location.pathname === to ? 'text-[#4ECAB0] font-bold' : ''
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
