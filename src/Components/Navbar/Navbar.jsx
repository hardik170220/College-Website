import React, { useEffect, useState } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import './Navbar.css'
import logo from '../../assets/logo.png'
import logo1 from '../../assets/logo1.png'
const Navbar = () => {
    const[sticky , setSticky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY >500 ? setSticky(true) : setSticky(false)
      })
    },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <Link to='hero' smooth={true} offset={0} duration={500}><img src={logo1} alt="" className='logo'/></Link>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>about us</Link></li>
            <li><Link to='campus' smooth={true} offset={-230} duration={500}>campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-250} duration={500}>testimonials</Link></li>
            <li><Link to='faculty' smooth={true} offset={-250} duration={500}>faculty</Link></li>
            {/* <li><Link to='contact' smooth={true} offset={50} duration={500}>contact us</Link></li> */}
            <li><button className='btn'><Link to='contact' smooth={true} offset={-250} duration={500}>contact us</Link></button></li>
        </ul>
    </nav>
  )
}

export default Navbar