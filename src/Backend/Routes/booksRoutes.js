const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const bookModel = require('../models/booksModels.js');
const userModel = require('../models/usersModels.js');


//Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error during login' });
  }
});

//Registration

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // You can adjust the saltRounds as needed

    // Check if the username or email is already taken
    const existingUser = await userModel.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email is already in use' });
    }

    // Create a new user document with the hashed password
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});


// Add a book
router.post('/add', async (req, res) => {  
  try {
    const data = req.body;
    const newBook = new bookModel(data);
    await newBook.save();
    res.status(200).json({ message: "Book Added Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding the book" });
  }
});

// Get all books
router.get('/getBooks', async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json({ books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching books" });
  }
});

// Get a book by ID 
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await bookModel.findById(id);
    res.status(200).json({ book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching the book" });
  }
});

// Update a book by ID
router.put('/updateBook/:id', async (req, res) => {
  const id = req.params.id;
  const { title, author, language, description, genre, price } = req.body;
  try {
    const updatedBook = await bookModel.findByIdAndUpdate(
      id,
      { title, author, language, description, genre, price },
      { new: true } // This option returns the updated document
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ message: "Book Updated Successfully", updatedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating the book" });
  }
});


// Delete a book by ID
router.delete("/deleteBook/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await bookModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Book Deleted Successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting the book" });
  }
});

module.exports = router;
