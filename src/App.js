import './App.css';
import Signup from './Components/signup';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup'  Component={Signup}/>
        <Route path='/login'  Component={Login}/>
      </Routes>
    </Router>
  );
}

export default App;
