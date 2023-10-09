//Edit website interface [App.js] here 

import logo from './logo.svg';
import './App.css';
import About from './components/AboutMe/About';

function App() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <About/>
    </div>
    
  );
}

export default App;
