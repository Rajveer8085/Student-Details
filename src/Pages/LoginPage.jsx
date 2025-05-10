// src/pages/LoginPage.js
import React from 'react';
import { auth,provider } from '../Authentication/Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard'); // Login ke baad dashboard dikhega
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed. Try again.");
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2>Student Dashboard Login</h2>
      <button onClick={handleLogin} className="btn btn-primary mt-3">
        Sign in with Google
      </button>
    </div>
  );
}

export default LoginPage;
