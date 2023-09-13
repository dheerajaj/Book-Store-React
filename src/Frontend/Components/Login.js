import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 
import { Link, } from 'react-router-dom';



function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');  //Set Error Messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const headers = {
    'Content-Type': 'application/json', //  Content-Type of data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/login', formData, { headers }); 
      alert(response.data.message);

      if (response.data.success) {
        // Navigate to the home page if login is successful
     
       
      }
    } catch (error) {
         // Handle network or other errors here
      setError('Invalid username or password..');
    }
  };

  return (
    <>

     
    <div className='log-div'>
    
      <form className='log-form' onSubmit={handleSubmit}>
        <div>
        <img src='https://drive.google.com/uc?id=15BbTyWzTRv0VeLzO1eBu5HiiMM_9hjt_' alt='' className='log-image'></img>
          <h2>Login</h2> {/* Corrected the closing tag */}
          <input
            className='log-user'
            placeholder='Username'
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className='log-pass'
            placeholder='Password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Link to='/home'><button type="submit">Login</button></Link>
        <p>Not a User?</p>
        <Link to='/registration' className='reguser'>SignUp</Link>
        {error && <p className="error-message">{error}</p>}
      </form>
      
      {/* You might want to wrap the Link element in proper tags */}
      
    </div>
    </>
  );
}

export default Login;
