import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const url = 'http://localhost:4000/users';

export const LoginForm = () => {

 const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post(url, {email: userEmail, password: userPassword});
      console.log(res.data);
    } catch(error) {
        console.log(error.response);
    }
    console.log("submitted the form");
 }
 const [userEmail, setUserEmail] = useState("");
 const [userPassword, setUserPassword] = useState("");

  return (
    <>
      <form className="p-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor='email'>Email address</label>
          <input type="email" className="form-control" id="email" onChange={event => setUserEmail(event.target.value)} value={userEmail} />
          
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor='password'>Password</label>
          <input type="password" className="form-control" id="password" onChange={event => setUserPassword(event.target.value)} value={userPassword}/>
          
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" htmlFor='checkbox'></label>
          <input type="checkbox" className="form-check-input" id="checkbox" />
          Check me out
          
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <Link to="createAccount"><a>Don't have an account? Sign in here.</a></Link>
    </>
  )
}
