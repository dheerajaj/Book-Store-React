
import React, { useState } from 'react';
import axios from 'axios';
import './Viewbooks.css';

const UpdateBookForm = ({ bookId, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    language: '',
    description: '',
    genre: '',
    price: '',
    
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:8000/api/v1/updateBook/${bookId}`, formData);
      alert('Book updated successfully');
      onClose(); 
    } catch (error) {
      console.error('Error updating book:', error);
      // Handle the error (e.g., show an error message to the user)
    }
  };
  

  return (
    <div className={`update-form ${bookId ? 'overlay' : ''}`}>
      <h2 className='update'>Update Book</h2>
      <form>
        <input type="text" name="title" placeholder="Title"  value={formData.title} onChange={handleChange}  />
        <input type="text" name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="language"
          placeholder="Language"
          value={formData.language}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
        />
        
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>
          Update Book
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

const BooksSection = ({ booksData }) => {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/deleteBook/${id}`);
      alert('Deleted');
    } catch (error) {
      console.error('Error Deleting book:', error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="container">
      <div className="book-grid">
        {booksData &&
          booksData.map((item, index) => (
            <div key={item._id} className="book-card">
              <h6 className="book-name">{item.title}</h6>
              <p className="book-language">Language: {item.language}</p>
              <p className="book-description">Description: {item.description}</p>
              <p className="book-price">Price : Rs. {item.price}</p>
              
              <div className="book-buttons">
                <button
                  className="button"
                  onClick={() => {
                    setSelectedBookId(item._id);
                    setUpdateFormVisible(true);
                  }}
                >
                  Update
                </button>
                <button className="button delete" onClick={() => handleDelete(item._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>

      {isUpdateFormVisible && (
        <div className="overlay">
          <UpdateBookForm
            bookId={selectedBookId}
            onClose={() => setUpdateFormVisible(false)}
          />
        </div>
      )}
    </div>
  );
};

export default BooksSection;

