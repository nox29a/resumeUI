import React from 'react';
import HeroImg from '../img/hero.png';
const Header = () => {
  return (
    <header className=' bg-herohead py-6 fixed w-full z-10 border-b-8 border-purple-800'>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <div className='cursor-pointer' >
          <a href='#Hero'>
          <img className=' flex max-w-[50px] max-h-[50px]' src={HeroImg} alt="hero"></img></a>
        </div>
          <div className='flex flex-row '>
            <div className='mx-2 text-2xl p-2 border-2 border-purple-800 bg-purple-200 rounded-lg bg-opacity-60 cursor-pointer' >
            <a href='#About'>About Me</a></div>
            <div className='mx-2 text-2xl p-2 border-2 border-purple-800 bg-purple-200 rounded-lg bg-opacity-60 cursor-pointer' >
            <a href='#skill'>Skills</a></div>
            <div className='mx-2 text-2xl p-2 border-2 border-purple-800 bg-purple-200 rounded-lg bg-opacity-60 cursor-pointer' >
            <a href='#Projects'>Projects</a></div>
            <div className='mx-2 text-2xl p-2 border-2 border-purple-800 bg-purple-200 rounded-lg bg-opacity-60 cursor-pointer' >
            <a href='#Certification'>Certifications</a></div>
          </div>    
      </div>
  </header>
  ); 
};

export default Header;
