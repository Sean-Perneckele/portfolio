import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import '../styles/css/header.css';

function Header() {
  const smoothScroll = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const headerRef = useRef(null);


  const handleClick = (target) => {
    smoothScroll(target.substring(1));
  };

  return (
    <nav className='header' ref={headerRef}>
      <div className='nom'> Sean Perneckele </div>
      <div >
        <Link to='/' className='lien' onClick={() => handleClick('#presentation')}>
          Présentation
        </Link>
        <Link to='/#projet' className='lien' onClick={() => handleClick('#projet')}>
          Projets
        </Link>
        <Link to='/#competance' className='lien' onClick={() => handleClick('#competance')}>
          Compétences
        </Link>
        <Link to='/#formation' className='lien' onClick={() => handleClick('#formation')}>
          Formations
        </Link>
        <Link to='/#contact' className='lien' onClick={() => handleClick('#contact')}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Header;
