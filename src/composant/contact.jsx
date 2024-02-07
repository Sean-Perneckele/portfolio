import '../styles/css/contact.css'



function Contact() {

    return (
<section className='contact' id='contact'>
      
      
<div>
<p>contact</p>


<form action="mailto:sean.perneckele@gmail.com" method="post" encType="text/plain">
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

// contact 

//   <form action="mailto:you@yourdmainhere.com" method="post" enctype="text/plain">
//   FirstName: <input type="text" name="FirstName">
//   Email: <input type="text" name="Email">
//   <input type="submit" name="submit" value="Submit">
// </form>