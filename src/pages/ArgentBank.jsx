import '../styles/css/projets.css'
import { useEffect } from 'react';
import Slideshow from '../composant/Slideshow';
import Collapse from '../composant/Collapse'
import Banner from '../composant/banner'
import logo from '../asset/argentBankLogo.png'
import image1 from '../asset/ArgentBank1.png'
import image2 from '../asset/ArgentBank2.png'
import image3 from '../asset/ArgentBank3.png'
import image4 from '../asset/ArgentBank4.png'

function ArgentBank() {

    const images = [
        image1,
        image2,
        image3,
        image4
    ]

    
    const technologies = (
      <>
        <p className='equipments'>React</p>
        <p className='equipments'>Redux</p>
      </>
    );
    

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []); 
  
  return (
    <div className="logement" >
      
     
      <Banner logo={logo} />
      <div className='tempo'>
        <div className='contente'>
            <div className='contente__info'>
              <p className='title' >Argent Bank</p>
              <div> site d'agence Bancaire </div>
            </div  >

          <div className='evaluation'>
            <div className='utilisateur'> 
              <a href="https://github.com/Sean-Perneckele/ArgentBank-website-main" className='utilisateur--nom' target="_blank" rel="noopener noreferrer">  LIEN GitHub </a>  
            </div>
          </div>    
        </div>

        <div className='information'> 
          <div className='information__description'> <Collapse titre="Description"  contenu="Argent Bank est une agence bancaire. Sur le site, j'ai transformé leur page statique en application React en créant des composants réutilisables et utilisé Redux pour mettre en place un Store centralisé."/> </div>
          <div className='information__equipement'><Collapse titre="Technologies"  contenu={technologies}/></div>          
        </div>    
      </div>
        <Slideshow images={images}  />
    </div>    
  );
}
  
  export default ArgentBank