import React from 'react';

const About = () => {
  return (
  <div id="About" className=' pt-32'>
    <div className='grid place-items-center'>
      <div className='container mx-auto'>
        <h1 className='text-[90px] text-center p-8 gap-4'>About me</h1>
            <div className='text-lg grid grid-cols-1 md:grid-cols-2  p-8 gap-20 '>
              <p className='bg-hero border-4 border-purple-700 text-xl rounded-lg p-8 max-w-[500px] items-center '>I'm excited to be starting my journey in web development. While I may not have any professional experience yet, I am passionate about learning and developing my skills in this field.</p>
              <p className='bg-hero border-4 border-purple-700 text-xl  rounded-lg p-8 max-w-[500px]'>I recently completed a FreeCodeCamp Course, where I earned some certifications. Since then, I've been building my own projects, experimenting with different technologies, and staying up-to-date with the latest trends in web development.</p>
            </div>
      </div>
    </div>
  </div>
  )
};

export default About;
