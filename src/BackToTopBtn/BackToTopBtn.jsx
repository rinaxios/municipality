import React, {useEffect, useState} from 'react';
import s from './BackToTopBtn.module.css'
import { FaArrowCircleUp } from 'react-icons/fa'

function BackToTopBtn(props) {
    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopBtn(true);
            }else{
                setBackToTopBtn(false);
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTopBtn && (
                <div className={s.goTop} onClick={scrollUp}>
                         <FaArrowCircleUp className={s.goTopIcon}/>
                </div>
            )}
        </div>
    );
}

export default BackToTopBtn;