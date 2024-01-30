
import React, { useEffect } from 'react';
import '../styles/css/home.css'
import Thumbnail from '../composant/Thumbnail'
import Competance from '../composant/competance';
import Contact from '../composant/contact'

import Collapse from '../composant/Collapse'

import Portait from '../asset/sean.jpg'
import Presentation from '../composant/presentation';
function Home() {



  useEffect(() => {
    // Utilisez la propriété hash du window.location pour vérifier s'il y a une ancre dans l'URL
    const hash = window.location.hash;
    if (hash) {
      // Obtenez l'élément DOM correspondant à l'ancre
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        // Faites défiler la page jusqu'à l'ancre
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // Le tableau vide en second argument signifie que cela ne se produit qu'après le premier rendu


  return (
    <main>
    <div className="home">
  

   <Presentation Portait={Portait} />
    
      <section className='projet'>
        <p>Projets</p>
      <Thumbnail />
      </section>
   
    <Competance />

    <section className='formation' id='formation'>

        <div className='un'>
        <Collapse  titre="Formation" contenu="Intégrateur web : OpenClassRoom" key="formation"  />
        </div>

    </section>


    <Contact />

    </div>
    </main>
  )
}

export default Home