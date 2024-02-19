import '../styles/css/contact.css'

function Contact() {
    return (
<section className='contact' id='contact'>

<div>
<p>contact</p>

<form action="mailto:sean.perneckele@gmail.com" method="post" encType="text/plain">
  <input type="submit" value="Me contacter"/>
</form> 

</div>
</section>
    )
}

export default Contact;