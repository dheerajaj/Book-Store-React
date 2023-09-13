
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
 

  const [error, setError] = useState(''); // Set Error Messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const headers = {
    'Content-Type': 'application/json', // Content-Type of data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/login', formData, { headers });

      if (response.data.success) {
        // Show a success toast message
        toast.success(response.data.message);
        
        // to navigate to the home page.
       
      } else {
        // Show an error toast message
        toast.success(response.data.message);
      }
    } catch (error) {
      // Handle network or other errors here
      setError('Invalid username or password..');
    }
  };



  return (
    <> 
    <ToastContainer position='bottom-right' />
      <img src='https://drive.google.com/uc?id=1eRiJ_0m0wSvJ4DvaDboLLU-PadPPf9u_' alt='books' className='log-image'></img>

      <div className='log-div'>

        <form className='log-form' onSubmit={handleSubmit}>
          <div>

            <h2>Login</h2>
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
          <Link to='/home'><button type="submit" >Login</button></Link>
          <br></br>
          <Link to='/registration' className='reguser'>Not a User? - Sign Up Here</Link>
          {error && <p className="error-message">{error}</p>}
        </form>

      </div>

    
     
    </>
  );
}

export default Login;

