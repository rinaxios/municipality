import React from 'react';
import s from './ContactInfo.module.css'

function ContactInfo(props) {
    return (
        <div className={s.contact} id="contact-info">
            <div className={s.title}>Контактная информация:</div>
            <div className={s.address}><span>Адрес:</span> {props.address}</div>
            <div className={s.phone}><span>Контактный телефон:</span> <a href={"tel:" + props.phone}>{props.phone}</a></div>
            <div className={s.email}><span>Электронная почта:</span> <a href={"mailto:" + props.email}>{props.email}</a></div>
            <div className={s.website}><span>Сайт:</span> <a href={props.website}>{props.website}</a></div>
        </div>
    );
}

export default ContactInfo;