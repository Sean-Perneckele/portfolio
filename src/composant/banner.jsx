import '../styles/css/banner.css'


function Banner({logo}) {
    return (
    
        <div className='banner'>
            <img src={logo} alt="logo" />
            {/* <div>
                  <p>Chez vous, partout et ailleurs</p>
            </div> */}
        </div>
    
    )
}

export default Banner