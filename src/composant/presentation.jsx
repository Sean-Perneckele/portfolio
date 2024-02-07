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
                Bonjour, je m'appelle Sean Perneckele,
                passionné par l'informatique depuis le plus jeune âge. 
               
                J'ai décidé de me former pour en faire mon métier. 
                J'ai la reconnaissance RQTH et je suis enthousiaste au fait de continuer à développer mes compétences et de m'intégrer à une entreprise.
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