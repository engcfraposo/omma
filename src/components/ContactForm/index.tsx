import React, { useState } from 'react';
import contactBanner from "../../assets/contact-banner.png"
import contactLeft from "../../assets/contact-left.png"
import "./styles.css"

const ContactForm: React.FC = () => {
    
    return(
    <main className="contact-container">
        <div className="contact-banner">
            <img src={contactBanner} alt="Contato" />
            <h1>{"Manda um alô :)"}</h1>
        </div>
        <div className="form-container">
            <img src={contactLeft} alt="Contato" />
            <form>
                <h2>Contato</h2>
                <input 
                    type="text" 
                    name='name'
                    id='name'
                    placeholder='Coloque aqui o seu nome'
                />
                <input 
                    type="email" 
                    name='email'
                    id='email'
                    placeholder='Coloque aqui o seu e-mail'
                />
                <textarea
                    name='message'
                    id='message'
                    placeholder='Coloque aqui a sua mensagem'
                />
                <button type='submit'>enviar</button>
            </form>
        </div>
    </main>
    )
}

export default ContactForm;