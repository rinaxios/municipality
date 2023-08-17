import React from 'react';
import s from './Title.module.css'

function Title(props) {
    return (
        <div className={s.title}>{props.name}</div>
    );
}

export default Title;