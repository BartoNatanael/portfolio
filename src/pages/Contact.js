import React from 'react';
import emailjs from 'emailjs-com';
import BgTop from '../components/bgTop';
import BgBot from '../components/bgBot';
import '../styles/Contact.css';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('contact_service', 'temaplate_id', e.target, 'BartoNatanael')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return ( 
        <div className='contact'>
            <BgTop title={'Kontakt'}/>
            <div className='flex'>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <br/>
                <input type="text" name="user_name" placeholder='Twoje imię'/>
                <br/>
                <input type="email" name="user_email" placeholder='Twój mail'/>
                <br/>
                <textarea name="message" placeholder='Twoja wiadomość'/>
                <input type="submit" value="Wyślij" />
            </form>
            <div className="otherWays">
                <h3>Mój mail:</h3>
                <p>bartlomiej.krzysztof.nowak@gmail.com</p>
                <h3>Moje profile społecznościowe:</h3>
                <ul>
                    <li><a href="#"><i class="fab fa-github"></i> Git-hub</a></li>
                    <li><a href="#"><i class="fab fa-linkedin"></i> Linkedin</a></li>
                    <li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                </ul>
            </div></div>
            <BgBot/>
        </div>
     );
}
 
export default Contact;