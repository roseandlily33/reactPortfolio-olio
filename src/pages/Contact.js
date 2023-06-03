import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const  ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const form = useRef();
    const handleFormSubmit =(e) => {
    e.preventDefault();
    console.log('Submitting the form');
    emailjs.sendForm('service_mu6c7oe', 'template_nijrfml', form.current, 'QJItZZ3zOkjdjFwZx')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setName('');
    setEmail('');
    setMessage('');
}

    return (
         <div className="contactMe">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={handleFormSubmit}>
            <label>Name: </label>
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} required />
            <label>Email: </label>
            <input type="email" value={email} name='email' onChange={(e) => setEmail(e.target.value)} required/>
            <label>Message:</label>
            <textarea type="text" name='message' rows="4" cols="40" value={message} onChange={(e) => setMessage(e.target.value)} required/>
            <button>Submit</button>

        </form>
        <h5>{error}</h5>


    
    
    
    
     </div> );
}
 
export default ContactMe;