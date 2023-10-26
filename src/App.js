import './App.css';
import Signup from './Components/signup';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Feed from './Components/Feed';
import PrivateRoute from './Components/PrivateRoute';
function App() {
  return (
    <Router>
    <AuthProvider>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login'  element={<Login />}/>
        <Route path='/' element={<PrivateRoute/>}/>
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
