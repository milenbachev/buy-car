import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext.js';


import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MyCars from './components/My-cars/MyCars';
import Create from './components/Create/Create';
import Logout from './components/Logout/Logout';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import CreatePost from './components/CreatePost/CreatePost';
import AllPost from './components/AllPost/AllPost'

function App() {

  return (
    <AuthProvider >
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
            <Route path="/edit/:carId" element={<Edit />} />
            <Route path="/details/create-posts/:carId" element={<CreatePost />} />
            <Route path="/details/posts/:carId" element={<AllPost />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
