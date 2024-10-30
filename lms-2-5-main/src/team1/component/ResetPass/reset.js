import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Get email from localStorage
    const resetEmail = localStorage.getItem('resetEmail');
    if (!resetEmail) {
      navigate('/forgot-password');
    } else {
      setEmail(resetEmail);
    }
  }, [navigate]);

  const handleCodeVerification = (e) => {
    e.preventDefault();
    // Simulate code verification
    if (verificationCode.length === 6) {
      setMessage('Код баталгаажлаа!');
      setStep(2);
    } else {
      setMessage('Код буруу байна!');
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Simulate password reset
    if (newPassword === confirmPassword) {
      setMessage('Нууц үг амжилттай солигдлоо!');
      // Clear stored email
      localStorage.removeItem('resetEmail');
      // Redirect to login after short delay
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } else {
      setMessage('Нууц үг таарахгүй байна!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Нууц үг шинэчлэх
          </h2>
        </div>

        {step === 1 && (
          <form onSubmit={handleCodeVerification} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Баталгаажуулах код:
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  maxLength={6}
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-center tracking-widest"
                  placeholder="000000"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                6 оронтой код {email} хаяг руу илгээгдлээ
              </p>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Баталгаажуулах
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handlePasswordReset} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Шинэ нууц үг:
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Нууц үг давтах:
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Нууц үг шинэчлэх
            </button>
          </form>
        )}

        {message && (
          <div className={`mt-4 p-3 rounded-md ${
            message.includes('амжилттай') || message.includes('баталгаажлаа')
              ? 'bg-green-50 text-green-800'
              : 'bg-red-50 text-red-800'
          }`}>
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

export default ResetPassword;