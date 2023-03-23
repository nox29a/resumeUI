import React, { useState, useContext, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {BsBag} from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
const Header = () => {
  const [ isActive, setIsActive ] = useState(true);
  const { isOpen, setIsOpen} = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext); 
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    })});
  return (
    
    <header className={`${ isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
    <div className='container mx-auto flex items-center justify-between h-full'>
  
    <Link to="/"> 
      <div>
        <img className='w-[50px] border-double border-4 border-blue-500 shadow-2xl hover:border-dotted' src={Logo} alt="logo" />
      </div>
    </Link>

  <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer  flex relative' >
<BsBag className='text-2xl' />  
    <div className='bg-blue-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full justify-center items-center flex'>{itemAmount}</div>
  </div>
  </div>
  </header>
  ); 
};

export default Header;
