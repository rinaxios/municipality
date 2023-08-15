import React from 'react';
import s from './Contact.module.css'
import ContactInfo from "./ContactInfo/ContactInfo";
import Feedback from "./Feedback/Feedback";

function Contact(props) {
    const contactData = [{
            "id": 1,
            "address": "Жети-Өгүз айылы, Мамырбаев көчөсү № 11",
            "phone": "03946 28-1-48",
            "email": "dzhetioguzao@mail.ru",
            "website": "http://jetioguz.kg"
        }]
    const newContactData = contactData.map(el => <ContactInfo address={el.address}
                                                              phone={el.phone}
                                                              email={el.email}
                                                              website={el.website}/>)

    return (
        <div>
            {newContactData}
            <Feedback />
        </div>
    );
}

export default Contact;