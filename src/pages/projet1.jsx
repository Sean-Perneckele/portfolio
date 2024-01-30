import '../styles/css/logement.css'
import { useParams, Navigate, Link } from 'react-router-dom';
import données from '../kasa.json'
import Slideshow from '../composant/Slideshow';
import Star from '../composant/star';
import Collapse from '../composant/Collapse'


import image1 from '../asset/ArgentBank1.png'
import image2 from '../asset/ArgentBank2.png'
import image3 from '../asset/ArgentBank3.png'
import image4 from '../asset/ArgentBank4.png'

function Projet1() {

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
              <p className='title' >Argent Bank</p>
              {/* <p className='location'>teste2</p> */}
              <div> site d'agence Banquaire </div>
            </div  >

          <div className='evaluation'>
            <div className='utilisateur'> 
              <a href="https://github.com/Sean-Perneckele/ArgentBank-website-main" className='utilisateur--nom'>  LIEN GitHub </a>  
              {/* <img className='utilisateur--image' src="" alt="teste5" /> */}
            </div>
          </div>

          <a href="mailto:sean.perneckele@gmail.com">Envoyer Email</a>

        </div>

        <div className='information'>
          <div className='information__description'> <Collapse titre="Description"  contenu=""/> </div>
          <div className='information__equipement'><Collapse titre="Technologie"  contenu="React  / Redux "/></div>          
        </div>    
    </div>
  );
}
  
  export default Projet1

  // contact 

//   <form action="mailto:you@yourdmainhere.com" method="post" enctype="text/plain">
//   FirstName: <input type="text" name="FirstName">
//   Email: <input type="text" name="Email">
//   <input type="submit" name="submit" value="Submit">
// </form>