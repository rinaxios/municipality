import React from 'react';
import s from './MediaLinks.module.css'
import {FaInstagram, FaTelegram, FaWhatsapp, FaYoutube} from "react-icons/fa";

function MediaLinks(props) {
    return (
        <div className={s.mediaLinks}>
            <a href=""><FaTelegram className={s.mediaLinksIcon}/></a>
            <a href=""><FaWhatsapp className={s.mediaLinksIcon}/></a>
            <a href=""><FaInstagram className={s.mediaLinksIcon}/></a>
            <a href=""><FaYoutube className={s.mediaLinksIcon}/></a>
        </div>
    );
}

export default MediaLinks;