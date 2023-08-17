import React from 'react';
import s from './Feedback.module.css'
import Title from "../../Title/Title";

function Feedback(props) {
    return (
        <div>
            <Title name="Обратная связь"/>
            <form className={s.feedbackForm}>
                <div className={s.name}>
                    <label htmlFor="name">ФИО*</label><br/>
                    <input className={s.formInput} type="text" name="name" placeholder="Введите ФИО..."/>
                </div>
                <div className={s.email}>
                    <label htmlFor="email">Эл.почта*</label><br/>
                    <input className={s.formInput} type="email" name="email" placeholder="Введите эл.почту..."/>
                </div>
                <div className={s.phone}>
                    <label htmlFor="phone">Телефон*</label><br/>
                    <input className={s.formInput} type="text" name="phone" placeholder="Введите телефон..."/>
                </div>
                <div className={s.message}>
                    <label htmlFor="message">Сообщение*</label><br/>
                    <textarea className={s.formInput} name="message" rows="5" placeholder="Введите сообщение..."></textarea>
                </div>
                <div className={s.btn}>
                    <button>Отправить</button>
                </div>
            </form>
        </div>
    );
}

export default Feedback;