
import React, { useEffect } from 'react';
import '../styles/css/home.css'
import Thumbnail from '../composant/Thumbnail'
import Competance from '../composant/competance';
import Contact from '../composant/contact'

import Collapse from '../composant/Collapse'

import Portait from '../asset/sean.jpg'

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
    <section className='accueil ' id='accueil'> 
      <img src={Portait} alt="portait" />

      <div> Bonjour je suis Sean Perneckele développeur </div>

    </section >


    <section className='presentation ' id='presentation'>

      <div className='present'>
      <div>
        Bonjour je suis Sean Perneckele. passioner par l'informatique depuis mon plus jeune age 
        j'ai décider de me former pour en faire mon métier.

        J'ai la reconnaissance RQTH et je suis entousiaste au fait de continuer a développer
        mes compétance et de mintégré a une entreprise 
      </div>
      </div>
      <div className='signature'>
      <p>Sean Perneckele</p>
      </div>
    </section>
    
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