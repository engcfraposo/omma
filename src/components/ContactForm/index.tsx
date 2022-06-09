import React, { useState } from 'react';
import { useFormik } from 'formik';
import contactBanner from "../../assets/contact-banner.png"
import contactLeft from "../../assets/contact-left.png"
import {postContact} from '../../services/contacts'
import "./styles.css"

const ContactForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        onSubmit: async values => {
            await postContact(values)
            alert("Mensagem enviada com sucesso!")
        }
    })
    
    
    return(
    <main className="contact-container">
        <div className="contact-banner">
            <img src={contactBanner} alt="Contato" />
            <h1>{"Manda um alô :)"}</h1>
        </div>
        <div className="form-container">
            <img src={contactLeft} alt="Contato" />
            <form onSubmit={formik.handleSubmit}>
                <h2>Contato</h2>
                <input 
                    type="text" 
                    name='name'
                    id='name'
                    placeholder='Coloque aqui o seu nome'
                    value={formik.values.name} //valor que está no useState
                    onChange={formik.handleChange} //handle criado para alterar o name
                />
                <input 
                    type="email" 
                    name='email'
                    id='email'
                    placeholder='Coloque aqui o seu e-mail'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <textarea
                    name='message'
                    id='message'
                    placeholder='Coloque aqui a sua mensagem'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                />
                <button type='submit'>enviar</button>
            </form>
        </div>
    </main>
    )
}

export default ContactForm;