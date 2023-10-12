import './App.css';
import { CreateAccount } from './CreateAccount';
import { LoginForm } from './LoginForm';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import RoutesPage from './RoutesPage';
import Header from './Header';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FlightSearchForm from './FlightSearchForm';

function App() {
  return (
    <BrowserRouter>
      <AuthenticatedApp />
    </BrowserRouter>
  );
}

function AuthenticatedApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [weather, setWeather] = useState({});
  const [associatedLocations, setAssociatedLocations] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await axios.post('http://18.168.101.57:3005/authenticate');
        setIsLoggedIn(res.data.userLoggedIn);
        const user = JSON.parse(localStorage.getItem("user"));

      } catch (error) {
        console.error('Error checking login status:', error);
        setIsLoggedIn(false);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://18.168.101.57:3005/logout');
      setIsLoggedIn(false);
      localStorage.removeItem("user");
      navigate('/login'); // Redirect user to login
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <>
      {/* <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> */}
      <Routes>
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="login" element={isLoggedIn ? <Navigate to="/routes-page" /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="routes-page" element={<RoutesPage />} />
        <Route path="flights-search-form" element={<FlightSearchForm />} />

      </Routes>
    </>
  );
}

export default App;
