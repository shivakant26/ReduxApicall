
import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './component/Header';
import Test from './component/Test';
function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Routes>
            <Route exact path='/'  element={<Home/>} />
            <Route  exact path='/test' element={<Test/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
