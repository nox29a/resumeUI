import React, {useContext} from 'react';
import Github from '../img/25231.png';
import Vercel from '../img/25331.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Portfolio = () => {
  return (
<div id='Projects' className='grid place-items-center pt-32'>
  <div className='container mx-auto md:mx-0'>
    <h1 data-aos="flip-down" className='text-[70px] sm:text-[90px] text-center p-8 gap-4'>Portfolio</h1>
    <div className='text-lg grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8 gap-40 justify-center'>
    {/* FIRST CARD */}
      <div  data-aos="flip-right" className='group w-72 sm:w-96 h-[500px] [perspective:1000px]'>
          <div className='bg-hero h-full border-4 border-purple-700 rounded-lg p-8 flex flex-col items-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='inset-0'>
              <h1 className='text-3xl font-bold text-center  mb-8'>Ecommerce Shop</h1>
              <img className='' src="http://nox29a.pythonanywhere.com/static/assets/img/0c81d715-48bf-439a-b952-f3b0038eda03.png" alt=""></img>
              <div className='pt-10 text-center'>
                  - ReactJS <br />
                  - Tailwind CSS <br />
                  - FakeStoreApi <br /></div>
            </div>
              <div className='absolute inset-0 h-full-w-full rounded-xl bg-white/90 px-12 text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]'> 
                <div className='flex min-h-full flex-col items-center justify-center'>
                  <h1 className='text-3xl font-bold '>Ecommerce Shop</h1>
                <div>
                  <div className='pt-10'>
                  Shop with electronic products, where you can add and remove products, in the future i will try to add payment function to it. <br />
</div>
                  <div className='flex flex-row justify-between mt-10 gap-10'>
                    <a href="https://github.com/nox29a/ecommerce-react-tailwind"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Github} alt="github"></img></a>
                    <a href="https://ecommerce-react-tailwind-gules.vercel.app/"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Vercel} alt="preview"></img></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    {/* SECOND CARD */}
      <div data-aos="flip-right" className='group w-72 sm:w-96 h-[500px] [perspective:1000px]'>
          <div className='bg-hero h-full border-4 border-purple-700 rounded-lg p-8 flex flex-col items-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='inset-0'>
              <h1 className='text-3xl font-bold text-center mb-8'>Countdown site</h1>
              <img className='' src="http://nox29a.pythonanywhere.com/static/assets/img/813e1fa0-bd35-4b0c-b732-f8fb12ecf8b4.png" alt=""></img>
              <div className='pt-10 text-center'>
                  - ReactJS <br />
                  - CSS <br /></div>
            </div>
              <div className='absolute inset-0 h-full-w-full rounded-xl bg-white/90 px-12 text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]'> 
                <div className='flex min-h-full flex-col items-center justify-center'>
                  <h1 className='text-3xl font-bold '>Countdown site</h1>
                <div>
                  <div className='pt-10'>
                  You can check here, how much time in this year we have got now. Also you can try with different date. <br />
</div>
                  <div className='flex flex-row justify-between mt-10 gap-10'>
                    <a href="https://github.com/nox29a/newyearcountdown-react"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Github} alt="github"></img></a>
                    <a href="https://newyearcountdown-react.vercel.app"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Vercel} alt="preview"></img></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>  
    {/* THIRD CARD */}
      <div data-aos="flip-left" className='group w-72 sm:w-96 h-[500px] [perspective:1000px]'>
          <div className='bg-hero h-full border-4 border-purple-700 rounded-lg p-8 flex flex-col items-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='inset-0'>
            <h1 className='text-3xl font-bold text-center mb-8'>Add user form</h1>
              <img className='h-[200px] w-full object-cover' src="http://nox29a.pythonanywhere.com/static/assets/img/336569946_1374489509992754_7025064824749271534_n.jpg" alt=""></img>
            <div className='pt-10 text-center'>
            - ReactNative <br />
                  - EXPO <br /></div>
            
            
            </div>
            
              <div className='absolute inset-0 h-full-w-full rounded-xl bg-white/90 px-12 text-center text-stale-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'> 
                <div className='flex min-h-full flex-col items-center justify-center'>
                  <h1 className='text-3xl font-bold text-black'>Add user form</h1>
                <div>
                  <div className='pt-10 text-black'>
                  This is form where you can add a conctractor i did it for a recruicment process, and have some plans to make full app from it.<br /></div>
                  <div className='flex flex-row justify-center mt-10'>
                    <a href="https://github.com/nox29a/reactnativeform"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Github} alt="github"></img></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    {/* FOUR CARD */}
      <div data-aos="flip-left" className='group w-72 sm:w-96 h-[500px] [perspective:1000px]'>
          <div className='bg-hero h-full border-4 border-purple-700 rounded-lg p-8 flex flex-col items-center transition-all duration-500 transform-custom group-hover:[transform:rotateY(180deg)]'>
            <div className='inset-0'>
            <h1 className='text-3xl font-bold text-center  mb-8'>My design <br />portfolio site</h1>
              <img className='h-[200px] w-full object-cover' src="http://nox29a.pythonanywhere.com/static/assets/img/djanogsite.PNG" alt=""></img>
              <div className='pt-10 text-center'>
                  - Bootstrap <br />
                  - Django <br /></div>
            </div>
              <div className='absolute inset-0 h-full-w-full rounded-xl bg-white/90 px-12 text-center text-stale-200 [transform:rotateY(180deg)] backface-custom content-auto'> 
                <div className='flex min-h-full flex-col items-center justify-center'>
                  <h1 className='text-3xl font-bold text-black'>My design portfolio site</h1>
                <div>
                  <div className='pt-10 text-black'>
                  This is my first made portfolio website, now with my more creative projects about videos, photos and images. <br /></div>
                  <div className='flex flex-row justify-between mt-10 gap-10'>
                    <a href="https://github.com/nox29a/cv"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Github} alt="github"></img></a>
                    <a href="https://nox29a.pythonanywhere.com/"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Vercel} alt="vercel"></img></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
};

export default Portfolio;
