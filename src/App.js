import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import News from "./News/News";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <About/>
        <News/>
        <Contact/>
    </div>
  );
}

export default App;
