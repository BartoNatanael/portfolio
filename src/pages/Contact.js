import React from 'react';
import emailjs from 'emailjs-com';
import BgTop from '../components/bgTop';
import BgBot from '../components/bgBot';
import '../styles/Contact.css';

const Contact = (props) => {

    let lang = props.english
    function sendEmail(e) {
        e.preventDefault();
        var submitted
    
        // emailjs.sendForm('contact_service', 'temaplate_id', e.target, 'BartoNatanael')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
      }
    return ( 
        <div className='contact'>
            <BgTop title={lang ? "Contact" : 'Kontakt'}/>
            <div className='flex'>
            <form className="contact-form" onSubmit="submitted=true" action="https://docs.google.com/forms/d/e/1FAIpQLSff9F3-m6rS9f6IRSCuxo6GtI1RCgRD5SdrAAyt_6RyuqxTrA/viewform?usp=pp_url">
                <input type="hidden" name="contact_number" />
                <br/>
                <input type="text" name="entry.1636029433" id="entry.1636029433" placeholder={lang ? 'Your name' : 'Twoje imię'}/>
                <br/>
                <input type="text" name="entry.1936518753" id="entry.1936518753" placeholder={lang ? 'Your email adress' : 'Twój mail'}/>
                <br/>
                <textarea name="entry.1756888725" id="entry.1756888725" placeholder={lang? "Your message" : 'Twoja wiadomość'}/>
                <input type="submit" value={lang ? 'Go to Google Form' : "Przejdź do Google Form"} />
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