import { Link, useLocation } from 'react-router-dom';
import '../styles/css/header.css';
import image1 from '../asset/logo1.png';

function Header() {
  const location = useLocation();

  const isOnAccueilPage = location.pathname === '/';
  const isOnProposPage = location.pathname === '/propos';

  return (
    <nav className='header'>
      <div className='nom'> Sean Perneckele </div>
      <div>
          
        <Link className={isOnAccueilPage ? 'lien underline' : 'lien'} to='/#acceuil'>
          Accueil
        </Link>
        <a href='/#presentation' className='lien'>Présentation</a>
        <a href='/#projet' className='lien'>projet</a>
        <a  href='/#competance'className='lien'>Compétance</a>
        <a  href='/#formation'className='lien'> Formation </a>
        <a  href='/#contact'className='lien'>Contact</a>
        {/* <Link className={isOnProposPage ? 'propo underline' : 'propo'} to='/propos'>
          A Propos
        </Link> */}
      </div>
    </nav>
  );
}

export default Header;