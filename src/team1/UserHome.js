import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const UserHome = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Программчлалын үндэс',
      description: 'Намрын улирал',
      image: 'https://miro.medium.com/v2/resize:fit:1400/0*SPjH6EGSjLcMPv8Q.jpg',
    },
    {
      id: 2,
      title: 'Өгөгдлийн бүтэц ба алгоритм',
      description: 'Намрын улирал',
      image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--H0AdlIEN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/srnvrd7vfeeq5qpxnabq.png',
    },
    {
      id: 3,
      title: 'Веб систем ба технологи',
      description: 'Намрын улирал',
      image: 'https://media.licdn.com/dms/image/D5612AQFlxMRpK-On8g/article-cover_image-shrink_720_1280/0/1670602482212?e=2147483647&v=beta&t=1HWOX81_1_mfqzP2kdHty9dnCVgb-dmVsMuYhBKCnRQ',
    },
    {
      id: 4,
      title: 'Машин сургалт',
      description: 'Намрын улирал',
      image: 'https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-pillar-page-overview.jpeg',
    },
    {
      id: 5,
      title: 'Өгөгдлийн сангийн систем',
      description: 'Намрын улирал',
      image: 'https://logicmojo.com/assets/dist/new_pages/images/dbms.png',
    },
    {
      id: 6,
      title: 'Мобайл программчлал',
      description: 'Намрын улирал',
      image: 'https://miro.medium.com/v2/resize:fit:1024/1*wppU8YwvObqYXk8kG8Gcaw.png',
    },
    {
      id: 7,
      title: 'Үйлдлийн систем',
      description: 'Намрын улирал',
      image: 'https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/Blog_Page_On_What_is_An_Operating_System_and_Its_Types_31c705b3b2.webp',
    },
  ];

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
          <Link to="/courses" className="nav-link">
            Курсууд
          </Link>
          <div className="user-profile">
            <img
              src="https://randomuser.me/api/portraits/women/24.jpg"
              alt="User Profile"
              className="profile-pic"
            />
          </div>
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

      {/* Courses Section */}
      <div className="courses-section">
        <h2 className="section-title">Миний курсууд</h2>
        <div className="course-grid">
          {courses.slice(0, showAllCourses ? courses.length : 4).map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <Link to={`/courses/${course.id}`} className="course-link">
                Хичээлийн хэрэглэгч харах
              </Link>
            </div>
          ))}
        </div>
        <button
          className={`expand-button ${showAllCourses ? 'expanded' : ''}`}
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? 'Хураах' : 'Илүү харуулах'}
        </button>
      </div>
    </div>
  );
};

export default UserHome;