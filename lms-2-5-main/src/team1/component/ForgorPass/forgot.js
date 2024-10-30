import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Simulate sending verification code
    setMessage('Баталгаажуулах код илгээгдлээ. Email-ээ шалгана уу.');
    // Store email in localStorage for the reset page
    localStorage.setItem('resetEmail', email);
    // Navigate to reset password page after short delay
    setTimeout(() => {
      navigate('/reset-password');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Нууц үг сэргээх
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Бүртгэлтэй email хаягаа оруулна уу
          </p>
        </div>

        <form onSubmit={handleEmailSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email хаяг:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="example@domain.com"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Үргэлжлүүлэх
          </button>
        </form>

        {message && (
          <div className="mt-4 p-3 rounded-md bg-green-50 text-green-800">
            {message}
          </div>
        )}

        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/login')}
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Буцах
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;