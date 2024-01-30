import React, { useState, useEffect } from 'react';
import '../styles/css/Slideshow.css';
import { useParams } from 'react-router-dom';
import données from '../kasa.json';
import vector1 from '../asset/Vector1.png';
import vector2 from '../asset/Vector2.png';

function Slideshow({ images }) {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Masquer la numérotation si une seule image
    if (images.length === 1) {
      const numerotationElement = document.querySelector('.numerotation');
      const arrow1 = document.querySelector('.vector1')
      const arrow2 = document.querySelector('.vector2')
      if (numerotationElement) {
        numerotationElement.style.display = 'none';
        arrow1.style.display = 'none';
        arrow2.style.display = 'none';
      }
    }
  }, [images.length]);

  if (!images || images.length === 0) {
    return <div>Logement introuvable</div>;
  }

  // Fonction pour passer à l'image précédente
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='slideshow'>
      <div className='slide-image'>
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
        <img onClick={previousImage} className='arrow vector1' src={vector1} alt="flèche gauche" />
        <div className='numerotation'>
          {currentImageIndex + 1} / {images.length}
        </div>
        <img onClick={nextImage} className='arrow vector2' src={vector2} alt="flèche droite" />
      </div>
    </div>
  );
}

export default Slideshow;