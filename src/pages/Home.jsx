
import React, { useEffect } from 'react';
import '../styles/css/home.css'
import Thumbnail from '../composant/Thumbnail'
import Competance from '../composant/competance';
import Contact from '../composant/contact'
import Collapse from '../composant/Collapse'
import Portait from '../asset/sean.jpg'
import Presentation from '../composant/presentation';
function Home() {

  const equipments = (
    <>
      <p className='equipments'>Intégrateur web : OpenClassRoom</p>
      <p className='equipments'>BAC et BTS électrotechnique</p>
      <p className='equipments'>Permis B</p>
    </>
  );

  useEffect(() => {

    const hash = window.location.hash;
    if (hash) {
      
      const targetElement = document.querySelector(hash);
      if (targetElement) {
      
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); 

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
        <Collapse  titre="Formations" contenu={equipments} key="formation"  />
        </div>
    </section>

    <Contact />

    </div>
    </main>
  )
}

export default Home