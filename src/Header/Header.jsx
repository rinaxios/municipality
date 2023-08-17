import React, {useState} from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import MediaLinks from "../MediaLinks/MediaLinks";
import { FaBars, FaXmark } from "react-icons/fa6";


function Header({menuActive, setMenuActive}) {
    const closeMenu = () => setMenuActive(false)

    return (
        <div className={s.header}>
            <div className={s.navbarTop}>
                <div className={s.container}>
                    <MediaLinks/>
                    <div className={s.rightSide}>
                        <div className={s.language}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg" alt=""/>
                            {/*<div className={s.languageText}>кыргызский</div>*/}
                            KG
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
                    <div className={ menuActive ? `${s.navs} ${s.navsActive}` : s.navs}>
                        <div className={s.nav}>
                            <NavLink to="/" className={ navData => navData.isActive ? s.active : s.navLink } onClick={closeMenu}>Главная</NavLink>
                        </div>
                        <div className={s.nav}>
                            <NavLink to="/news" className={ navData => navData.isActive ? s.active : s.navLink } onClick={closeMenu}>Новости</NavLink>
                        </div>
                        <div className={s.nav}>
                            <NavLink to="/about" className={ navData => navData.isActive ? s.active : s.navLink } onClick={closeMenu}>О нас</NavLink>
                            <div className={s.dropDownMenu}>
                                {<DropDownMenu
                                    linkFirst="/about/#history" menuFirst="История округа"
                                    linkSecond="/about#administration" menuSecond="Администрация"
                                    linkThird="/about/#deputies" menuThird="Совет депутатов"/>}
                            </div>
                        </div>
                        <div className={s.nav}>
                            <NavLink to="/contact" className={ navData => navData.isActive ? s.active : s.navLink } onClick={closeMenu}>Контакты</NavLink>
                            <div className={s.dropDownMenu}>
                                {<DropDownMenu
                                    linkFirst="/contact/#contact-info" menuFirst="Контактная информация"
                                    linkSecond="/contact/#feedback" menuSecond="Обратная связь"/>}
                            </div>
                        </div>
                    </div>
                    <div className={s.burgerMenu} onClick={() => setMenuActive(!menuActive)}>
                        {!menuActive ? <FaBars/> : <FaXmark/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;