import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {

  const isAuthenticated = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">
          Blogs App
        </Link>
        <div>
          <Link to="/">Blogs</Link>
          {isAuthenticated ? (
            <div>
              <Link to="/create" className="mr-4">
                Create
              </Link>
              <Link to="/admin" className="mr-4">
                Admin Panel
              </Link>
              <button onClick={logout} className="text-red-500">
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login" className="mr-4">
                Login
              </Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar