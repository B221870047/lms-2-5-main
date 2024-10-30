import './SignUp.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');

  var users = [
    {
        id: 1, username: "admin", password: "123", firstName: "Админ",
        lastName: "А", familyName: "А", role: { id: 1, name: "Системийн админ" }
    },
    {
        id: 2, username: "user", password: "123", firstName: "Хэрэглэгч",
        lastName: "А", familyName: "А", role: { id: 1, name: "Системийн хэрэглэгч" }
    },
    {
        id: 3, username: "schooladmin", password: "123", firstName: "Админ",
        lastName: "А", familyName: "А", role: { id: 1, name: "Сургуулийн админ" }
    },
    {
        id: 4, username: "schoolteacher", password: "123", firstName: "Багш",
        lastName: "А", familyName: "А", role: { id: 1, name: "Сургуулийн багш" }
    },
    {
        id: 5, username: "schoolstudent", password: "123", firstName: "Оюутан",
        lastName: "С", familyName: "С", role: { id: 5, name: "Сургуулийн оюутан" }
    }
]

  const handleSwitch = () => {
    setIsLogin(!isLogin);
    setMessage('');
    setFirstName('');
    setLastName('');
    setFamilyName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setImageUrl('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {  
      // Handle login
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        setMessage('Амжилттай нэвтэрлээ!');
        navigate('/schools/current');
      } else {
        setMessage('Invalid credentials!');
      }
    } else {
      // Handle signup
      if (!validateEmail(email)) {
        setMessage('Please enter a valid email address!');
        return;
      }

      if (users.some(u => u.username === username)) {
        setMessage('Username already exists!');
        return;
      }

      if (users.some(u => u.email === email)) {
        setMessage('Email already registered!');
        return;
      }

      const newUser = { username, email, password, imageUrl };
      setMessage('Signup successful! You can now log in.');
      setIsLogin(true);
    }
  };

  const handleUserClick = (clickedUsername) => {
    setUsername(clickedUsername);
    setPassword('');
    setEmail('');
    setImageUrl('');
    if (!isLogin) {
      setIsLogin(true);
    }
    setMessage('');
  };

  return (
    <div className='auth-container'>
        <div className="user-list">
          <h3>Бүртгэлтэй хэрэглэгчид:</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index} onClick={() => handleUserClick(user.username)} className="clickable-user">
                {user.imageUrl && <img src={user.imageUrl} alt={user.username} className="user-avatar" />}
                {user.username}
              </li>
            ))}
          </ul>
        </div>
        <div className='infoIn'>
          <h2>{isLogin ? 'Нэвтрэх' : 'Бүртгүүлэх'}</h2>
          <form onSubmit={handleSubmit}>

          {!isLogin && (
              <div>
                <label>Нэр:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            )}
            {!isLogin && (
              <div>
                <label>Овог:</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            )}
            {!isLogin && (
              <div>
                <label>Ургийн овог:</label>
                <input
                  type="text"
                  value={familyName}
                  onChange={(e) => setFamilyName(e.target.value)}
                  required
                />
              </div>
            )}

            <div>
              <label>Нэвтрэх нэр:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            {!isLogin && (
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )}
            <div>
              <label>Нууц үг:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {!isLogin && (
              <div>
                <label>Нүүр зурагны URL:</label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            )}
            <button type="submit">{isLogin ? 'Нэвтрэх' : 'Бүртгүүлэх'}</button>
          </form>
          <p className={message.includes('successful') ? 'success-message' : 'error-message'}>
            {message}
          </p>
          { isLogin && (
            <a href='/forgot-password'>
            Нууц үг мартсан?
          </a>
          )}
          
          <button className='switch-btn' onClick={handleSwitch}>
            {isLogin ? 'Бүртгэлгүй' : 'Бүртгэлтэй'} бол энд дарна уу.
          </button>
        </div>
    </div>
  );
};

export default Auth;