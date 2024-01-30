import '../styles/css/logement.css'
import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import données from '../kasa.json'
import Slideshow from '../composant/Slideshow';
import Star from '../composant/star';
import Collapse from '../composant/Collapse'
import Banner from '../composant/banner'
import logo from '../asset/KasaLogo.png'

import image1 from '../asset/Kasa1.png'
import image2 from '../asset/kasa2.png'
import image3 from '../asset/Kasa3.png'
import image4 from '../asset/kasa4.png'

function Projet2() {

    const images = [
        image1,
        image2,
        image3,
        image4
    ]
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []); // Déplace la fenêtre vers le haut au chargement du composant
  return (
    <div className="logement">
      <Banner logo={logo} />
      <div className='tempo'> 
        <div className='contente'>
            <div className='contente__info'>
              <p className='title' >Kasa</p>
              {/* <p className='location'>teste2</p> */}
                  <div> site de lication imobilière </div>
            </div  >

          <div className='evaluation'>
            <div className='utilisateur'> 
              <a href="https://github.com/Sean-Perneckele/ArgentBank-website-main" className='utilisateur--nom'> Lien GitHub </a>  
              {/* <img className='utilisateur--image' src="" alt="teste5" /> */}
            </div>

          </div>

                 

        </div>

        <div className='information'>
          <div className='information__description'> <Collapse titre="Description"  contenu="teste7"/> </div>
          <div className='information__equipement'><Collapse titre="Equipement"  contenu="HTML / CSS / JavaSript / React "/></div>          
        </div>    

      </div>

        <Slideshow images={images}  />
    </div>
  );
}
  
  export default Projet2