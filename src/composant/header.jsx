import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.style.backgroundColor = 'black';
      } else {
        headerRef.current.style.backgroundColor = 'transparent';
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

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
