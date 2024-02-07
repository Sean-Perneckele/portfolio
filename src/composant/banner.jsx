import '../styles/css/banner.css'

function Banner({logo}) {
    return (
        <div className='banner'>
            <img src={logo} alt="logo" />
        </div>  
    )
}

export default Banner