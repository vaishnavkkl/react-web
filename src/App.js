
import './App.css';
import Navigation from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Button from "./components/Button";
import Header from "./components/Header"
import Carousell from "./components/Carousel";

function App() {
  return (
    <>
        
     <Navigation/>
     <Header />
     <Button/>
     <Carousell/>
    </>
  );
}

export default App;
