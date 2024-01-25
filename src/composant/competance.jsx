import '../styles/css/competance.css'

import html from '../asset/HTML5.png'
import css from '../asset/CSS3.png'
import javaScript from '../asset/JavaScript.png'
import react from '../asset/react.png'
import redux from '../asset/redux.png'

function Competance() {

   return (
    <section className='competance' id='competance'>
      
    <p>Compétance</p>

      <div>
        <img src={html} alt="logo html" className='image' />
        <img src={css} alt="logo css"   className='image'/>
        <img src={javaScript} alt="logo javaSript" className='image' />
        <img src={react} alt="logo react" className='image'/>
        <img src={redux} alt="logo redux" className='image'/>
      </div>

  </section>
   );
}

export default Competance 