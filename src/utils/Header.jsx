import React, { useContext } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { Theme } from './ThemeContext'; // Ensure this matches your export

const Header = () => {
  const navigate = useNavigate();
  const { theme,user } = useContext(Theme);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top shadow-sm ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-white'}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/product">
          <i className="bi bi-shop me-2"></i>RK STORE.IO
        </Link>
        
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
            </li>
          </ul>
          
          <div className="d-flex align-items-center gap-3">
            <button 
              className="btn btn-outline-danger btn-sm rounded-pill px-3" 
              onClick={() => navigate('/login')}
            >
              Logout
            </button>
          </div>

          {/* User Profile Section */}
<div className="d-flex align-items-center ms-lg-3">
  <div className={`d-flex align-items-center border px-3 py-1 rounded-pill ${theme === 'dark' ? 'bg-secondary border-secondary text-white' : 'bg-light border-light text-dark'}`}>
    {/* User Icon */}
    <div 
      className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-2" 
      style={{ width: '24px', height: '24px', fontSize: '12px' }}
    >
      <i className="bi bi-person-fill text-white"></i>
    </div>
    {/* Username */}
    <span className="small fw-bold">
      {user || "Guest"}
    </span>
  </div>
</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
