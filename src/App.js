

import Home from './my_components/Home';
import Navbar from './my_components/Navbar';
import Education from './my_components/Education';
import Contact from './my_components/Contact';
import Skills from './my_components/Skills';
import Projects from './my_components/Projects';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className='bg-[#000F16] '>

      <BrowserRouter>

        <Navbar />
        
        
        <Routes>
          <Route path='/' element={<><Home /> <Education/> <Skills/>  <Projects/> <Contact/> </> } />
          <Route path='/education' element={<Education />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />

        </Routes>
        <footer className="py-4 bg-[#001C29]  text-white">
          <div className="container mx-auto px-4">
            <p>&copy; 2024 Ravikiran</p>
          </div>
        </footer>
      </BrowserRouter>


    </div>
  )
}

export default App;
