import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BooksSection from '../Pages/BooksSection';

import { ClipLoader } from "react-spinners";
import './Books.css';

const Books = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/getBooks");
        setData(response.data.books);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

 
    

  return (
    <div className="container">
    <img src='https://drive.google.com/uc?id=1eRiJ_0m0wSvJ4DvaDboLLU-PadPPf9u_' alt='books' className='Bbtn'></img>
      
      {loading ? (
        <div className=".loader-container">
        <ClipLoader className="custom-loader" loading={true}  size={80} />
      </div>
      ) : (
        <BooksSection booksData={data} />
      )}
    </div>
  );
};

export default Books;
