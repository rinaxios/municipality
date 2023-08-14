import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import News from "./News/News";
import Contact from "./Contact/Contact";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Footer/Footer";
import BackToTopBtn from "./BackToTopBtn/BackToTopBtn";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                    <BackToTopBtn/>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/about" element={<div className="container"><About/></div>}/>
                        <Route path="/news" element={<div className="container"><News/></div>}/>
                        <Route path="/contact" element={<div className="container"><Contact/></div>}/>
                    </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
