import React, {useState} from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

function Header(props) {

    return (
        <div className={s.header}>
            <div className={s.navbarTop}>
                <div className={s.container}>
                    <div className={s.mediaLinks}>
                        <img src="https://static-00.iconduck.com/assets.00/telegram-icon-2048x2048-qq8ggh79.png" alt=""/>
                        <img src="https://static-00.iconduck.com/assets.00/whatsapp-icon-512x512-kjrig5y0.png" alt=""/>
                        <img src="https://static-00.iconduck.com/assets.00/instagram-icon-512x512-822bkylo.png" alt=""/>
                        <img src="https://static-00.iconduck.com/assets.00/youtube-icon-512x360-wcugcfm8.png" alt=""/>
                    </div>
                    <div className={s.rightSide}>
                        <div className={s.translate}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg" alt=""/>
                            {/*<div className={s.translateText}>кыргызский</div>*/}
                            кыргызский
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.navbarBottom}>
                <div className={s.container}>
                    <NavLink to="/" className={s.logo}>
                        <img className={s.logoImg} src="https://www.open.kg/uploads/posts/2014-06/1403349109_national_emblem_of_kyrgyzstan.svg_1.png" alt=""/>
                        <div className={s.logoTexts}>
                            <div className={s.logoTextTop}>Жети-Өгүз</div>
                            <div className={s.logoTextBot}>Айыл өкмотү</div>
                        </div>
                    </NavLink>
                    <div className={s.navs}>
                        <div className={s.nav}>
                            <NavLink to="/" className={ navData => navData.isActive ? s.active : s.navLink }>Главная</NavLink>
                        </div>
                        <div className={s.nav}>
                            <NavLink to="/news" className={ navData => navData.isActive ? s.active : s.navLink }>Новости</NavLink>
                        </div>
                        <div className={s.nav}>
                            <NavLink to="/about" className={ navData => navData.isActive ? s.active : s.navLink }>О нас</NavLink>
                            <div className={s.dropDownMenu}>
                                {<DropDownMenu
                                    linkFirst="/about/#history" menuFirst="История округа"
                                    linkSecond="/about/#administration" menuSecond="Администрация"
                                    linkThird="/about/#deputies" menuThird="Совет депутатов"/>}
                            </div>
                        </div>
                        <div className={s.nav}>
                            <NavLink to="/contact" className={ navData => navData.isActive ? s.active : s.navLink }>Контакты</NavLink>
                            <div className={s.dropDownMenu}>
                                {<DropDownMenu
                                    linkFirst="/contact/#contact-info" menuFirst="Контактная информация"
                                    linkSecond="/contact/#feedback" menuSecond="Обратная связь"/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;