import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserFormFields from './UserFormFields';
import { useNavigate } from 'react-router-dom';
import './login2.css';
import logoText from './logotext.png';
import logo from './logo.png';
import { Footer } from './Footer';
const url = 'http://18.168.101.57:3005/createaccount';

export const CreateAccount = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const extraFields = (
    <div className="mb-3">
      <label className="form-label" htmlFor='confirmPassword'>Confirm Password</label>
      <input type="password" className="form-control" id="confirmPassword" onChange={event => setConfirmPassword(event.target.value)} value={confirmPassword}/>
    </div>
  );

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await axios.post(url, { userName: userEmail, password: userPassword });
      console.log(res.data); 
      navigate('/login');
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <>
    <div className='container'>
    <img className="logotext" src={logoText}/>

      <form className="p-5" onSubmit={handleSubmit}>
        <UserFormFields userEmail={userEmail} setUserEmail={setUserEmail} userPassword={userPassword} setUserPassword={setUserPassword} extraFields={extraFields} />
        <button type="submit" className="loginbtn">Create Account</button>
      </form>
      <Link to="/login" className="logintext">Already have an account? Login here.</Link>
      </div>
      <Footer/>
    </>
  );
}
