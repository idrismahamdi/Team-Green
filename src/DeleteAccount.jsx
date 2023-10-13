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

            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-center">
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Account</button>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                    <button className="btn btn-success" type="button" onClick={handleLogout}>Logout</button>
                </li>
            </ul>


        </div>

    )
}

export default DeleteAccount;