import './App.css';
import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';

import { AuthContext } from './contexts/AuthContext.js';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MyCars from './components/My-cars/My-cars';
import Create from './components/Create/Create';
import Logout from './components/Logout/Logout';

function App() {
  const [user, setUser] = useState({
    _id: '',
    email: '',
    accessToken: ''
  })

  const login = (authDate) =>{
    setUser(authDate)
  }

  return (
    <AuthContext.Provider value={{user, login}}>
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
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
