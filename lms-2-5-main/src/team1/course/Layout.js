import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.css';

const Layout = ({ username = "User Name", profileImageUrl = "https://imgs.search.brave.com/49ogd4rOP14ONhT6mrJ7zWxdIklksiQ-C_veJs54ha4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0" }) => {
  return (
    <div className="guest-home">
      {/* Header */}
      <nav className="nav-header">
        <div className="nav-left">
          <img 
            src="https://cdn1.iconfinder.com/data/icons/online-education-1-3-1/1024/online_education-18-512.png" 
            alt="Logo" 
            className="logo"
          />
          <h1 className="site-title">Цахим шалгалтын систем</h1>
        </div>
        <div className="nav-right">
          <img 
            src={profileImageUrl} 
            alt="Profile" 
            className="profile-image"
          />
          <span className="username">{username}</span>
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      
    </div>
  );
};

export default Layout;
