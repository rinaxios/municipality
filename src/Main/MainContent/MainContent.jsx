import React from 'react';
import s from "./MainContent.module.css";
import Title from "../../Title/Title";

function MainContent(props) {
    return (
        <div>
            <div className={s.img}>
                <img src={props.img} alt=""/>
            </div>
            <div className={s.container}>
                <Title name={props.title}/>
                <div className={s.content}>{props.content}</div>
            </div>
        </div>
    );
}

export default MainContent;