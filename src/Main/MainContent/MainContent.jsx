import React from 'react';
import s from "./MainContent.module.css";

function MainContent(props) {
    return (
        <div>
            <div className={s.img}>
                <img src={props.img} alt=""/>
            </div>
            <div className={s.container}>
                <div className={s.title}>{props.title}</div>
                <div className={s.content}>{props.content}</div>
            </div>
        </div>
    );
}

export default MainContent;