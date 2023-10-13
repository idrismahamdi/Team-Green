import React from 'react'
import profile from './profile.jpeg'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DeleteAccount = ({ handleLogout, username }) => {

    const url = `http://18.168.101.57:3005/deleteaccount/${username}`

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete your account?')) {
            axios.delete(url)
                .then(() => {
                    handleLogout();
                    alert("your account has been deleted");
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            alert('your account was not deleted')
        }

    }

    return (

        <div className="card w-25 mt-5">
            <img src={profile} className="card-img-top" alt="profile picture" />
            <div className="card-body">
                <h5 className="card-title">Are you sure you want to delete your account?</h5>
                <div className='d-flex justify-content-center'><button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button></div>
            </div>
        </div>

    )
}

export default DeleteAccount;