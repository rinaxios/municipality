import React, {useEffect, useState} from 'react';
import s from './BackToTopBtn.module.css'

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
                    <img src="https://static-00.iconduck.com/assets.00/arrow-circle-right-icon-512x512-w5ijueds.png"
                         alt=""/>
                </div>
            )}
        </div>
    );
}

export default BackToTopBtn;