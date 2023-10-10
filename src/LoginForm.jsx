import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import UserFormFields from './UserFormFields';

const url = 'http://18.168.101.57:3005/login';

export const LoginForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, { userName: userEmail, password: userPassword });
      console.log(res.data);

      localStorage.setItem("user", JSON.stringify({userName: userEmail}));
      navigate('/routes-page');
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <>
      <form className="p-5" onSubmit={handleSubmit}>
        <UserFormFields userEmail={userEmail} setUserEmail={setUserEmail} userPassword={userPassword} setUserPassword={setUserPassword} />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <Link to="/create-account">Don't have an account? Sign in here.</Link>
    </>
  );
}
