// src/components/Contact.js

import React, { useState } from 'react';

const Contact = () => {
  
  const initialFormState = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form Data:', formData);
    alert('Your message has been sent successfully!');
    setFormData(initialFormState);


  };

  return (
    <section  className="text-[#4ECAB0] text-[#4ECAB0] bg-[#000F16] relative p-6 md:p-10 lg:p-5 bg-cover bg-center ">
      <div className="">
        <h2 className="text-center font-[130] text-[50px]">Contact Information</h2>
        <div className='text-[1rem] text-left '>
        <p>You can reach me at:</p>
        <ul className="list-none mb-8">
          <li className="mb-2">Email: <a href="kiranda2k1@gmail.com" className="text-blue-500">kiranda2k1@gmail.com</a></li>
          <li className="mb-2 ">Phone: <span className='text-blue-500'>8088033353</span></li>
          
        </ul>
        </div>
        <div className="text-[#4ECAB0] w-[100vw]  mx-[6rem] overflow-hidden relative lg:mx-[20rem] ">
          <div className='text-[1rem] text-left  '>
          <h3 className="text-2xl font-semibold mb-4 px-[2rem]">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4  ">
            <div >
              <label className="block text-sm font-medium text-[#4ECAB0]">Name:</label>
              <input type="text" name="name" placeholder='Enter fullname' value={formData.name} onChange={handleChange} required className="mt-1 block w-3/6 border border-gray-300 rounded-md p-2 text-slate-950" />
            </div>
            <div >
              <label  className="block text-sm font-medium text-[#4ECAB0]">Email:</label>
              <input type="email" name="email" placeholder='Enter email' value={formData.email} onChange={handleChange} required className="mt-1 block w-3/6 border border-gray-300 rounded-md p-2 text-slate-950" />
            </div>
            <div >
              <label  className="block text-sm font-medium text-[#4ECAB0]">Subject:</label>
              <input type="text" name="subject" placeholder='Enter Subject' value={formData.subject} onChange={handleChange} required className="mt-1 block w-3/6 border border-gray-300 rounded-md p-2 text-slate-950" />
            </div>
            <div >
              <label  className="block text-sm font-medium text-[#4ECAB0]">Message:</label>
              <textarea name="message" placeholder='Enter the message' value={formData.message} onChange={handleChange} rows="3" required className="mt-1 block w-3/6 border border-gray-300 rounded-md p-2 text-slate-950"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Send Message</button>
          </form>
        
          </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;