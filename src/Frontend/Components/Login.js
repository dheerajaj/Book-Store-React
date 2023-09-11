import {React,  useState } from 'react';
import axios from 'axios';
import './Login.css';

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
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', formData, { headers });
      alert(response.data.message);
      // Handle successful login (e.g., store the token or session data)
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };
  

  return (
    <div className='Log-form'>
     
      <form onSubmit={handleSubmit}>
        <div>
        <h2>Login</h2>
          <input placeholder='Username'
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          
          <input placeholder='Password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
