import React from 'react';
import s from './History.module.css'

function History(props) {
    const options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const time = new Date(props.time).toLocaleString("ru-RU", options);

    return (
        <div className={s.history} id="history">
            <div className={s.title}>{props.title}</div>
            <div className={s.content}>{props.content}</div>
            <div className={s.img}>
                <img src={props.photo} alt=""/>
            </div>
            <div className={s.time_create}>{time}</div>
        </div>
    );
}

export default History;