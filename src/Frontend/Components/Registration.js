// 

import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
import { Link } from 'react-router-dom';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const headers = {
    'Content-Type': 'application/json',
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/register', formData, { headers });
      setMessage(response.data.message);
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="reg-form">
    <img className='reg-im' src='https://kcouk.org/ksims/resources/images/icons/registerStudent.svg' alt=''></img>
      <h1 className='SignHead'>Sign Up</h1>
      <br /><br />
      <form onSubmit={handleSubmit} >
        <input className='user'
          placeholder='Name'
          type="text"
          id="name"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        /><br />

        <input className='user'
          placeholder='E-mail'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />

        <input className='user'
          placeholder='Password'  type="password"  id="password"  name="password"  value={formData.password}  onChange={handleChange}  required /><br />

        <input  className='user'
          placeholder='Confirm Password' type="password"  id="confirmPassword"  name="confirmPassword"  value={formData.confirmPassword} onChange={handleChange} required /><br />

        <button type="submit">Register</button>
      </form>
      
      {message && <p>{message}</p>}
      <p>Already a User?</p>
      <Link className='loguser' to="/"> Login</Link>
    </div>
  );
}

export default Registration;
