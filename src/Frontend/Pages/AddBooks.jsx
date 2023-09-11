import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Addbooks.css'; // Import the external CSS file

const AddBooks = () => {
  const [Data, setData] = useState({
    title: "",
    author: "",
    language: "",
    description: "",
    genere: "",
    image: "",
    price: ""
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  }

  const headers = {
    'Content-Type': 'application/json',
  }

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/v1/add", Data, { headers })
      .then((res) => alert(res.data.message));
    setData({
      title: "",
      author: "",
      language: "",
      description: "",
      genere: "",
      price: ""
    })
  }

  return (
    <div className="container">
    <Link className='viewbook' to="/books">View Book</Link>
      <div className="form-group">

        <input type="text" placeholder="Book Name" onChange={change} value={Data.title} name="title" required />

        <input type="text" placeholder="Author Name" onChange={change} value={Data.author} name="author" required />

        <input type="text" placeholder="Language" onChange={change} value={Data.language} name='language' required />

        <input type="text" placeholder="Description" value={Data.description} onChange={change} name="description" required />

        <input type="text" placeholder="Genere" value={Data.genere} onChange={change} name="genere" required />

        <input type="number" placeholder="Enter Price" value={Data.price} onChange={change} name="price" required />

        <button className="button" onClick={submit}>Submit</button>
        <br></br>

        
        </div>
       
    </div>
  );
}

export default AddBooks;
