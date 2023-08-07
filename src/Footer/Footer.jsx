import React from 'react';
import s from './Footer.module.css'
import {NavLink} from "react-router-dom";
import DropDownMenu from "../Header/DropDownMenu/DropDownMenu";

function Footer(props) {

    const nowDate = new Date();
    const year = nowDate.getFullYear();

    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.topSide}>
                    <NavLink to="/" className={s.logo}>
                        <img className={s.logoImg} src="https://www.open.kg/uploads/posts/2014-06/1403349109_national_emblem_of_kyrgyzstan.svg_1.png" alt=""/>
                        <div className={s.logoTexts}>
                            <div className={s.logoTextTop}>Жети-Өгүз</div>
                            <div className={s.logoTextBot}>Айыл өкмотү</div>
                        </div>
                    </NavLink>
                    <div className={s.navs}>
                        <div className={s.nav}>
                            <NavLink to="/" className={s.navLink}>Главная</NavLink>
                        </div>
                        <div className={s.nav}>
                            <NavLink to="/news" className={s.navLink}>Новости</NavLink>
                        </div>
                        <div className={s.nav}>
                            <NavLink to="/about" className={s.navLink}>О нас</NavLink>
                        </div>
                        <div className={s.nav}>
                            <NavLink to="/contact" className={s.navLink}>Контакты</NavLink>
                        </div>
                    </div>
                </div>

                <div className={s.bottomSide}>
                    <div className={s.footerText}>© {year} Администрация c. Жети-Өгүз</div>
                    <div className={s.mediaLinks}>
                        <img src="https://static-00.iconduck.com/assets.00/telegram-icon-2048x2048-qq8ggh79.png" alt=""/>
                        <img src="https://static-00.iconduck.com/assets.00/whatsapp-icon-512x512-kjrig5y0.png" alt=""/>
                        <img src="https://static-00.iconduck.com/assets.00/instagram-icon-512x512-822bkylo.png" alt=""/>
                        <img src="https://static-00.iconduck.com/assets.00/youtube-icon-512x360-wcugcfm8.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;