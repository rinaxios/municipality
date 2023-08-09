import React from 'react';
import s from './Administration.module.css'

function Administration(props) {
    return (
        <div className={s.administration} id="administration">
            <div className={s.img}>
                <img src={props.img} alt=""/>
            </div>
            <div>
                <div className={s.name}><span>Имя:</span> {props.name}</div>
                <div className={s.position}><span>Позиция:</span> {props.position}</div>
                <div className={s.contactInfo}><span>Краткая информация:</span> {props.contactInfo}</div>
                <div className={s.email}><span>Ел. почта:</span>  <a href={"mailto:" + props.email}>{props.email}</a></div>
            </div>
        </div>
    );
}

export default Administration;