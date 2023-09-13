
import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';

function Registration() {
  // State to hold form data and messages
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle input changes and update formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const headers = {
    'Content-Type': 'application/json',
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/register', formData, { headers });
      toast.success(response.data.message); // Display success toast
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      toast.error('Registration failed. Please try again.'); // Display error toast
    }
  };

  return (
    <>
    <ToastContainer position='bottom-right'/>    
    <div className="reg-form">
                                        {/* Container for displaying toasts */}
      <img className='reg-im' src='https://kcouk.org/ksims/resources/images/icons/registerStudent.svg' alt='' />
      <h1 className='SignHead'>Sign Up</h1>
      <br /><br />
      <form onSubmit={handleSubmit} >
        <input className='user' placeholder='Name'
          type="text" id="name" name="username" value={formData.username}
          onChange={handleChange}  required  /><br />

        <input className='user'
          placeholder='E-mail' type="email" id="email"
          name="email" value={formData.email} onChange={handleChange} required /><br />

        <input className='user'
          placeholder='Password' type="password" id="password" name="password" 
          value={formData.password} onChange={handleChange} required /><br />

        <input className='user'
          placeholder='Confirm Password' type="password" id="confirmPassword"
           name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required /><br />

        <button type="submit">Register</button>
      </form>
      <br></br>
      <Link className='loguser' to="/"> Already a User? Login Here</Link>
    </div>
    </>
  );
}

export default Registration;
