import '../styles/css/presentation.css'


function Presentation({Portait}) {
    return (
    
        <section className='presentation ' id='presentation'>
        <div className='un'>
          <p>Présentation</p>
          <div className='deux'>
          <img src={Portait} alt="portait" />
            <div className='trois'> 
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
            </div> 
          </div>
        </div>
      </section>
    )
}

export default Presentation