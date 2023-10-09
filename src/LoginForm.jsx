import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserFormFields from './UserFormFields';

const url = 'http://localhost:4000/users';

export const LoginForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, { email: userEmail, password: userPassword });
      console.log(res.data);
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
