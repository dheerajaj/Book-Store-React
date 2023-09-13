import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {


  const handleLog = () => {
    toast.success("LogOut Successful");
    // Redirect to the login page after a short delay (e.g., 2 seconds)
    setTimeout(() => {
      // Replace 'login' with the actual login route
    }, 2000); // Adjust the delay as needed
  };

  return (
    <>
      <ToastContainer position='top-left' />
      <div>
        <nav className='navigation'>
          <div className='logo'>
            <img src='https://drive.google.com/uc?id=1eRiJ_0m0wSvJ4DvaDboLLU-PadPPf9u_' alt='books' />
          </div>

          <div className='items'>
            <Link className='dashboard' to="/home">
              Dashboard
            </Link>
            <Link className='addbooks' to="/addbooks">
              Add Books
            </Link>
           <Link to='/'>  <button className='logout' onClick={handleLog}>
              LogOut
            </button></Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
