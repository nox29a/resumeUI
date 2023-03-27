import React from 'react';
import ReactIcon from '../img/react.jpg';
import BootstrapIcon from '../img/bootstrap.jpg';
import PythonIcon from '../img/python.jpg';
import JavascriptIcon from '../img/javascript.jpg';
import HtmlIcon from '../img/html.jpg';
import CssIcon from '../img/css.jpg';
import PhotoshopIcon from '../img/photoshop.jpg';
const Skills = () => {
  const icons = [ReactIcon, BootstrapIcon, PythonIcon, JavascriptIcon, HtmlIcon, CssIcon, PhotoshopIcon];  
  return (
  <div id='skill' className='grid place-items-center bg-hero pt-32'>
    <div className='container mx-auto'>
      <h1 className='text-[90px] text-center p-8 gap-4'>Skills</h1>
        <div className='text-lg grid grid-cols-3 md:grid-cols-4  p-8 gap-20 mx-40'>
          {icons.map((icon, index) => (<img src={icon} alt='icon' className='max-w-[70px] max-h-[70px] animate-wiggle hover:animate-spin '></img>))}
        </div>
    </div>
  </div>
)
};

export default Skills;
