import React from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CalculPage from './pages/calculPage'
import Home from './pages/Home'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <>
     <Router>
       <Header/>
       <Routes>
       <Route path="/" element={<Home/>}/>
         
       <Route path='/simulation' element={<CalculPage/>} />
     </Routes>
     </Router> 
    </>
  );
}

export default App;
