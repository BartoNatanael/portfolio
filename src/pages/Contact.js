import React from 'react';
import emailjs from 'emailjs-com';
import BgTop from '../components/bgTop';
import BgBot from '../components/bgBot';
import '../styles/Contact.css';

const Contact = (props) => {

    let lang = props.english
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
            <BgTop title={lang ? "Contact" : 'Kontakt'}/>
            <div className='flex'>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <br/>
                <input type="text" name="user_name" placeholder={lang ? 'Your name' : 'Twoje imię'}/>
                <br/>
                <input type="email" name="user_email" placeholder={lang ? 'Your email adress' : 'Twój mail'}/>
                <br/>
                <textarea name="message" placeholder={lang? "Your message" : 'Twoja wiadomość'}/>
                <input type="submit" value={lang ? 'Send' : "Wyślij"} />
            </form>
            <div className="otherWays">
                <h3>{lang? "My email adress:" : 'Mój mail:'}</h3>
                <p>bartlomiej.krzysztof.nowak@gmail.com</p>
                <h3>{lang?'My profiles:':'Moje profile społecznościowe:'}</h3>
                <ul>
                    <li><a href="https://github.com/BartoNatanael"><i className="fab fa-github"></i> Git-hub</a></li>
                    <li><a href="https://www.linkedin.com/in/bart%C5%82omiej-nowak-bb4897182/"><i className="fab fa-linkedin"></i> Linkedin</a></li>
                    <li><a href="https://www.facebook.com/bartek.krzysiek.nowak"><i className="fab fa-facebook"></i> Facebook</a></li>
                    <li><a href="https://www.instagram.com/bartonatanel/"><i className="fab fa-instagram"></i> Instagram</a></li>
                </ul>
            </div></div>
            <BgBot/>
        </div>
     );
}
 
export default Contact;