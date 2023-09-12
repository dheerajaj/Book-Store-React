import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Addbooks.css'; 

const AddBooks = () => {
  const [Data, setData] = useState({
    title: "",
    author: "",
    language: "",
    description: "",
    genere: "",
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
    <div className="container1">
  
      <div className="form-group">

        <input className='book-name' type="text" placeholder="Book Name" onChange={change} value={Data.title} name="title" required />

        <input className='book-author' type="text" placeholder="Author Name" onChange={change} value={Data.author} name="author" required />

        <input className='book-lang' type="text" placeholder="Language" onChange={change} value={Data.language} name='language' required />

        <input className='book-description' type="text" placeholder="Description" value={Data.description} onChange={change} name="description" required />

        <input className='book-genere' type="text" placeholder="Genere" value={Data.genere} onChange={change} name="genere" required />

        <input className='book-price' type="number" placeholder="Enter Price" value={Data.price} onChange={change} name="price" required />

        <button className="button" onClick={submit}>Submit</button>
        <br></br>
       
        </div>
        <Link className='viewbook1' to="/books">View Book</Link>
    </div>
  );
}

export default AddBooks;
