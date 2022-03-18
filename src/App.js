import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar/NavBar'
import Homepage from './pages/Homepage'
import Attachments from './pages/Attachments'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'
import Footer from './components/Footer/Footer'
import Learn from './pages/Learn'
import Profile from './pages/Profile'

function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/attachment-styles' element={<Attachments />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/our-team' element={<Team />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
