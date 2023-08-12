import React, {useEffect, useRef, useState} from 'react';
import s from './History.module.css'

const contentStyles = {
    WebkitLineClamp: 6,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
}

function History(props) {
    const [isOpen, setIsOpen] = useState(false)

    const [showReadMoreBtn, setShowReadMoreBtn] = useState(false)

    const ref = useRef(null)

    useEffect(() => {
        if (ref.current) {
            setShowReadMoreBtn(
                ref.current.scrollHeight !== ref.current.clientHeight
            )
        }
    }, [])

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
            <div className={s.content}>
                <div style={isOpen ? null : contentStyles} ref={ref}>
                    {props.content}
                </div>
                {showReadMoreBtn && (
                    <span onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? '...скрыть' : '...показать ещё'}
                    </span>
                )}
            </div>
            <div className={s.img}>
                <img src={props.photo} alt=""/>
            </div>
            <div className={s.time_create}>{time}</div>
        </div>
    );
}

export default History;