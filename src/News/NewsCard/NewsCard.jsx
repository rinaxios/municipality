import React from 'react';
import s from './NewsCard.module.css'

function NewsCard(props) {
    const options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const time = new Date(props.time).toLocaleString("ru-RU", options);

    if(props.published) {
        return (
            <div>
                <div className={s.card}>
                    <div className={s.img}>
                        <img
                            src={props.img}
                            alt=""/>
                    </div>
                    <div className={s.title}>{props.title}</div>
                    <div className={s.time}>{time}</div>
                </div>
            </div>
        );
    }
}

export default NewsCard;