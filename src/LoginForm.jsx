import React, { useState } from 'react'

export const LoginForm = () => {

 const handleSubmit = (e) => {
    e.preventDefault();
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
    </>
  )
}
