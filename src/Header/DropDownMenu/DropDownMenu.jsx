import React from 'react';
import s from './DropDownMenu.module.css'
import {NavLink} from "react-router-dom";

function DropDownMenu(props) {
    return (
        <div className={s.menus}>
            <div className={s.menu}>
                <NavLink to={props.linkFirst}>{props.menuFirst}</NavLink>
            </div>
            <div className={s.menu}>
                <NavLink to={props.linkSecond}>{props.menuSecond}</NavLink>
            </div>
            <div className={s.menu}>
                <NavLink to={props.linkThird}>{props.menuThird}</NavLink>
            </div>
        </div>
    );
}

export default DropDownMenu;