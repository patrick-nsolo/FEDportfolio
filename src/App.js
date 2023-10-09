//Edit website interface [App.js] here 

import logo from './logo.svg';
import './App.css';
import About from './components/AboutMe/About';
import Contact from './components/ContactForm/Contact';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/MyProjects/Projects';
import 

function App() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <About/>
    </div>
    
  );
}

export default App;
