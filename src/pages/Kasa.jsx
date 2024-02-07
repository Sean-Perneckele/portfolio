import '../styles/css/projets.css'
import { useEffect } from 'react';
import Slideshow from '../composant/Slideshow';
import Collapse from '../composant/Collapse'
import Banner from '../composant/banner'
import logo from '../asset/KasaLogo.png'
import image1 from '../asset/Kasa1.png'
import image2 from '../asset/kasa2.png'
import image3 from '../asset/Kasa3.png'
import image4 from '../asset/kasa4.png'

function Kasa() {

    const images = [
        image1,
        image2,
        image3,
        image4
    ]

    const  technologies = (
      <>
        <p className='equipments'>HTML</p>
        <p className='equipments'>CSS</p>
        <p className='equipments'>JavaScript</p>
        <p className='equipments'>React</p>
      </>
    );
    

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
                  <div> Site de location imobilière </div>
            </div  >

          <div className='evaluation'>
            <div className='utilisateur'> 
              <a href="https://github.com/Sean-Perneckele/kasa-P8" className='utilisateur--nom'> Lien GitHub </a>  
            </div>
          </div> 
        </div>

        <div className='information'>
          <div className='information__description'> <Collapse titre="Description"  contenu="Kasa est une entreprise de location de logement.  Sur la base de ce projet, j'ai conçu le site d'après une maquette et j'ai créé la page en React avec des composants réutilisables."/> </div>
          <div className='information__equipement'><Collapse titre="Technologies"  contenu={technologies}/></div>          
        </div>    
      </div>
        <Slideshow images={images}  />
    </div>
  );
}
  
  export default Kasa