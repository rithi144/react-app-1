//import logo from './logo.svg';
import './App.css';
//import TestComponent from "./Components/classComp/testClassComponent.jsx";
//import Login from "./Components/classComp/LoginClassComponent.jsx"
//import PropsComponent from './Components/functionalComp/PropsComponent';
//import StateComponent from './Components/classComp/StateComponent.jsx';
import NavBar from './Components/functionalComp/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Components/functionalComp/About';
import Experience from './Components/functionalComp/Experience';
import Home from './Components/functionalComp/Home';
import Login from './Components/functionalComp/Login';
import Footer from './Components/functionalComp/footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/exp" element={<Experience />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
      

       {/* <PropsComponent name="Rithika" course="MERN"/>  */}
       {/* <header className="App-header">
        {/* <StateComponent/> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */} 
      <div>
      <Footer/>
      </div>
    </div>

    
  );
}

export default App;
