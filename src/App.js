import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar/NavBar'
import Homepage from './pages/Homepage'
import Attachments from './pages/Attachments'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'

function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        {/* <Route path='/attachment-styles' element={<Attachments />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
