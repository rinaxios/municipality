import React from 'react';
import s from './NewsCard.module.css'

function NewsCard(props) {
    return (
        <div>
            <div className={s.card}>
                <div className={s.img}>
                    <img
                        src={props.img}
                        alt=""/>
                </div>
                <div className={s.title}>{props.title}</div>
            </div>
        </div>
    );
}

export default NewsCard;