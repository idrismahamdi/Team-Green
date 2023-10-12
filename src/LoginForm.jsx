import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import UserFormFields from './UserFormFields';
import './login2.css';
import logoText from './logotext.png';
import { Footer } from './Footer';
import ErrorPopup from './components/popups/ErrorPopup';
const url = 'http://18.168.101.57:3005/login';

export const LoginForm = ({ setIsLoggedIn, setUsername }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState({ status: false })

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, { userName: userEmail, password: userPassword })

      localStorage.setItem("user", JSON.stringify({ userName: userEmail }));
      setIsLoggedIn(res.data.userLoggedIn);

      setUsername(res.data.userName);
      if (res.data.userLoggedIn) { navigate('/routes-page') } else {
        setError({ status: true, header: "Not Authenticated", body: "Incorrect login details." })
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {error.status && <ErrorPopup errorHeader={error.header} errorBody={error.body} closeFunc={() => setError({ status: false })} />}
      <div className='container'>
        <img className="logotext" src={logoText} />
        <form className="p-5" onSubmit={handleSubmit}>
          <UserFormFields userEmail={userEmail} setUserEmail={setUserEmail} userPassword={userPassword} setUserPassword={setUserPassword} />
          <button className="loginbtn" type="submit" >Login</button>
        </form>
        <Link to="/create-account" className="logintext">Don't have an account? Sign in here.</Link>
      </div>
      <Footer></Footer>

    </>
  );
}
