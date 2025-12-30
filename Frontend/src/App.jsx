import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateBlog from './Pages/CreateBlog';
import Login from './Pages/Login';
import Blog from './Pages/Blog';
import Register from './Pages/Register';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassword from './Pages/ForgotPassword';
import AdminPanel from './Pages/AdminPanel';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App