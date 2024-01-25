import données from '../kasa.json'
import '../styles/css/Thumbnail.css'
import { Link } from 'react-router-dom'
import image1 from '../asset/ImageS1.png'
import image2 from '../asset/ImageS2.png'

function Thumbnail() {
  return (
    <div className='thumbnail' id='projet'>

      
        <Link to={`/projet1`} className='thumbnail__article' key="projet1">
          <div className="thumbnail__image-container">
            <img src={image1} alt="" />
          </div>
          <p>teste1</p>
        </Link>

        <Link to={`/projet2`} className='thumbnail__article' key="projet2">
          <div className="thumbnail__image-container">
            <img src={image2} alt="" />
          </div>
          <p>teste1</p>
        </Link>
     
    </div>
  )
}

export default Thumbnail;