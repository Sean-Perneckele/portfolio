import '../styles/css/logement.css'
import { useParams, Navigate } from 'react-router-dom';
import données from '../kasa.json'
import Slideshow from '../composant/Slideshow';
import Star from '../composant/star';
import Collapse from '../composant/Collapse'

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

  return (
    <div className="logement">
      <Slideshow images={images}  />
        <div className='contente'>
            <div className='contente__info'>
              <p className='title' >teste1</p>
              <p className='location'>teste2</p>
                  <div> teste3 </div>
            </div  >

          <div className='evaluation'>
            <div className='utilisateur'> 
              <p className='utilisateur--nom'>  teste4 </p>  
              <img className='utilisateur--image' src="" alt="teste5" />
            </div>

            <div className='star'> 
              étoile6
            </div>
          </div>

                 

        </div>

        <div className='information'>
          <div className='information__description'> <Collapse titre="Description"  contenu="teste7"/> </div>
          <div className='information__equipement'><Collapse titre="Equipement"  contenu="teste8"/></div>          
        </div>    
    </div>
  );
}
  
  export default Projet2