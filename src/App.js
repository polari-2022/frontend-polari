import './App.css';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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
import Dashboard from './pages/Dashboard';

const url = process.env.NODE_ENV === 'development'
  ? '/graphql' : "https://backend-polari.herokuapp.com/graphql";
const httpLink = createHttpLink({
  uri: url,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [attachment, setAttachment] = useState('');
  console.log("attachment", attachment)

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/attachment-styles' element={<Attachments />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/our-team' element={<Team />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/learn' element={<Learn setAttachment={setAttachment} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* <Route path='/profile' element={<Profile attachment={attachment} />} /> */}
        </Routes>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
