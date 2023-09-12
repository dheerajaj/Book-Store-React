
import React, { useState} from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';


function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/login', formData, { headers });
      alert(response.data.message);

      if (response.data.success) {

        
       
      }
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  

  return (
    <div className='log-div'>
      <form className='log-form' onSubmit={handleSubmit}>
        <div>
          <h2>Login</h2>
          <input  className='log-user'
            placeholder='Username'
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input className='log-pass'
            placeholder='Password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Link to='/home'> <button type="submit">Login</button> </Link>
      </form>
    </div>
  );
}

export default Login;
