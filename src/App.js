import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import News from "./News/News";
import Contact from "./Contact/Contact";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
