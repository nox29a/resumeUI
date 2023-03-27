import React from 'react';

const Certification = () => {
      return (
<div id='Certification' className='bg-hero grid place-items-center pt-32'>
      <div className='container mx-auto'>
            <h1 className='text-[90px] text-center p-8 gap-4'>Certifications</h1>
            <div className='text-lg grid md:grid-cols-2 lg:grid-cols-3 p-8 gap-20 '>
                  <a href="https://www.freecodecamp.org/certification/nox29a/responsive-web-design">
                  <div className='bg-certification border-4 border-blue-500 rounded-lg p-8 flex flex-col items-center h-96 hover:border-purple-500'><div className='text-center mb-12 lg:mb-5'>Responsive web design</div>
                        <img className='max-w-[250px] pb-10 hover:scale-125' src="https://nox29a.pythonanywhere.com/static/assets/img/portfolio/cert2.png" alt=""></img>
                  </div></a>
                  <a href="https://www.freecodecamp.org/certification/nox29a/javascript-algorithms-and-data-structures ">
                  <div className='bg-certification border-4 border-blue-700 rounded-lg p-8  flex flex-col items-center h-96 hover:border-purple-500'><div className='text-center mb-5'>Javascript algorithms and data structures</div>
                        <img className='max-w-[250px] pb-10 flex justify-center items-center hover:scale-125' src="https://nox29a.pythonanywhere.com/static/assets/img/portfolio/cert1.jpg" alt=""></img>
                  </div></a>
                  <a href="https://www.freecodecamp.org/certification/nox29a/front-end-development-libraries ">
                  <div className='bg-certification border-4 border-blue-900 rounded-lg p-8 flex flex-col items-center h-96 hover:border-purple-500'><div className='text-center mb-5'>Front end development libraries</div>
                        <img className='max-w-[250px] pb-10 hover:scale-125' src="https://nox29a.pythonanywhere.com/static/assets/img/portfolio/cert3.PNG" alt=""></img>
                  </div></a>
            </div>
      </div>
</div>
      )
};

export default Certification;
