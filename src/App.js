import './App.css';
import Signup from './Components/signup';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Feed from './Components/Feed';
import PrivateRoute from './Components/PrivateRoute';
function App() {
  return (
    <Router>
    <AuthProvider>
      <Routes>
        <Route path='/signup'  Component={Signup}/>
        <Route path='/login'  Component={Login}/>
        <PrivateRoute path='/' Component={Feed} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
