import'./App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import News from "./News/News";
import Contact from "./Contact/Contact";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Footer/Footer";
import BackToTopBtn from "./BackToTopBtn/BackToTopBtn";
import {useState} from "react";

function App() {
    const [menuActive, setMenuActive] = useState(false)
    const closeMenu = () => setMenuActive(false)

    return (
        <BrowserRouter>
            <div className="App">
                <Header menuActive={menuActive} setMenuActive={setMenuActive}/>
                    <BackToTopBtn/>
                    <Routes>
                        <Route path="/" element={<div onClick={closeMenu}><Main/></div>}/>
                        <Route path="/about" element={<div className="container" onClick={closeMenu}><About/></div>}/>
                        <Route path="/news" element={<div className="container" onClick={closeMenu}><News/></div>}/>
                        <Route path="/contact" element={<div className="container" onClick={closeMenu}><Contact/></div>}/>
                    </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
