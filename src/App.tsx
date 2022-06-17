import React from 'react';
import './assets/App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { Spacer } from '@chakra-ui/react';



function App() {
  return (
    <div>
      <Nav/>
      <Main/>
      <Spacer/>
      <Footer/>
    </div>
  );
}

export default App;
