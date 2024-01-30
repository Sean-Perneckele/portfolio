import '../styles/css/footer.css'
import cv from '../asset/faireUnCV.pdf'


function Footer() {
    return (
    <footer>
        <div>
            
            <a href={cv} target="_blank" rel="noopener noreferrer"> Mon CV</a>
        </div>
    </footer>
    )
}

export default Footer