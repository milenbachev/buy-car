import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';

import { AuthContext } from './contexts/AuthContext.js';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MyCars from './components/My-cars/MyCars';
import Create from './components/Create/Create';
import Logout from './components/Logout/Logout';
import Details from './components/Details/Details';

function App() {
  const [user, setUser] = useState({
    _id: '',
    email: '',
    accessToken: ''
  })

  const login = (authDate) =>{
    setUser(authDate)
  }

  const logout = () => {
    setUser({
      _id: '',
      email: '',
      accessToken: ''
    })
  }

  return (
    <AuthContext.Provider value={{user, login, logout, isAuthenticated: Boolean(user.email)}}>
      <div id='container'>
        <Header />
        <main className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-cars" element={<MyCars />} />
            <Route path="/create" element={<Create />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/details/:carId" element={<Details />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
