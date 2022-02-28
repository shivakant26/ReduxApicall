
import './App.css';
import Home from './component/Home';
import Jwellary from './component/Jwellary';
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; 
import Header from './component/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/jwellary' element={<Jwellary />}/>
        </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;
