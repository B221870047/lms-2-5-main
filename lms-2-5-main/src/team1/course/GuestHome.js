import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Guesthome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const universities = [
    { name: "МУИС", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttafpU6S-PENoV2W5IKw7QvSPXHItr6QrgQ&s" },
    { name: "ШУТИС", image: "https://www.dobu.mn/wp-content/uploads/SHUTIS.png" },
    { name: "АШУҮИС", image: "https://mnb.mn/uploads/201710/news/thumb/7d044e9520fe7496a92ffdef694a31d5_x3.jpg" },
    { name: "СЭЗИС", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb0dLgoEt7D3GTCEqyRV64g1wYrPgwi_xzWw&s" },
    { name: "ХААИС", image: "https://lce.muls.edu.mn/upload_img/60_jil_600.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % universities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="guest-home">
      {/* Navigation Header */}
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
          <Link to="/login" className="auth-button login">Login</Link>
          <Link to="/signup" className="auth-button signup">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <img 
          src="/home_poster.jpg" 
          alt="Online Learning Platform" 
          className="hero-image"
        />
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <h2 className="stats-title">Улс даяар 40'000 гаруй хэрэглэгч манай системийг ашиглаж байна.</h2>
        <div className="stats-container">
          <div className="stat-item">
            <h3>5</h3>
            <p>Их сургууль</p>
          </div>
          <div className="stat-item">
            <h3>300</h3>
            <p>Багш, Ажилчид</p>
          </div>
          <div className="stat-item">
            <h3>50'000+</h3>
            <p>Шалгалт авагдсан</p>
          </div>
        </div>
      </div>

      {/* Universities Carousel */}
      <div className="universities-section">
        <h2>Хамтрагч сургуулиуд:</h2>
        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{ 
              transform: `translateX(-${currentSlide * 20}%)`,
            }}
          >
            {universities.map((uni, index) => (
              <div key={index} className="university-card">
                <img src={uni.image} alt={uni.name} />
                <h3>{uni.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guesthome;
