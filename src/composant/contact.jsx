import '../styles/css/contact.css'



function Contact() {

    return (
<section className='contact' id='contact'>
      
      
<div>
<p>contact</p>


<form method="post">
  <label>Votre email</label>
  <input className="email" type="email" name="email"/>
  <label>Message</label>
  <textarea name="message"></textarea>
  <input type="submit"/>
</form> 

</div>
</section>
    )
}

export default Contact;