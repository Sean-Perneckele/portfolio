import { Link, useLocation } from 'react-router-dom';
import '../styles/css/header.css';
import image1 from '../asset/logo1.png';

function Header() {
  const location = useLocation();

  const isOnAccueilPage = location.pathname === '/';
  const isOnProposPage = location.pathname === '/propos';

  return (
    <nav className='header'>
      <div className='nom'> SEAN PERNECKELE </div>
      <div>
          
        <Link className={isOnAccueilPage ? 'acceuil underline' : 'acceuil'} to='/'>
          Accueil
        </Link>
        <a href='' className='acceuil'>Accueil</a>
        <a href='' className='acceuil'>Présentation</a>
        <a href='' className='acceuil'>projet</a>
        <a  href=''className='acceuil'>Compétance</a>
        <a  href=''className='acceuil'> Formation </a>
        <a  href=''className='acceuil'>Contact</a>
        <Link className={isOnProposPage ? 'propo underline' : 'propo'} to='/propos'>
          A Propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;