import './App.css';
import Footer from './Frontend/Components/Footer';
import Navbar from './Frontend/Components/Navbar';
import AddBooks from './Frontend/Pages/AddBooks';
import Books from './Frontend/Pages/Books';
import Home from './Frontend/Pages/Home';
import Registration from './Frontend/Components/Registration'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Frontend/Components/Login';

function App() {
  return (
  
    <Router>
      <Navbar/>
      
      <Routes>
      <Route path='/registration' exact element={<Registration></Registration>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/'  element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/addbooks' element={<AddBooks/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
