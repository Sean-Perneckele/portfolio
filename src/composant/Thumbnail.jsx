import données from '../kasa.json'
import '../styles/css/Thumbnail.css'
import { Link } from 'react-router-dom'
import image1 from '../asset/argentBankLogo.png'
import image2 from '../asset/KasaLogo.png'

function Thumbnail() {
  return (
    <div className='thumbnail' id='projet'>

      
        <Link to={`/projet1`} className='thumbnail__article' key="projet1">
          <div className="thumbnail__image-container">
            <img src={image1} alt="logo ArgentBank" />
          </div>
          
        </Link>

        <Link to={`/projet2`} className='thumbnail__article' key="projet2">
          <div className="thumbnail__image-container">
            <img src={image2} alt="Logo Kasa" />
          </div>
         
        </Link>
     
    </div>
  )
}

export default Thumbnail;