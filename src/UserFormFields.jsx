import React from 'react';

const UserFormFields = ({ userEmail, setUserEmail, userPassword, setUserPassword, extraFields }) => {
  return (
    <>
      <div className="mb-3">
        <label className="form-label" htmlFor='email'>Email address</label>
        <input type="email" className="form-control" id="email" onChange={event => setUserEmail(event.target.value)} value={userEmail} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor='password'>Password</label>
        <input type="password" className="form-control" id="password" onChange={event => setUserPassword(event.target.value)} value={userPassword}/>
      </div>
      {extraFields}
    </>
  );
};

export default UserFormFields;
