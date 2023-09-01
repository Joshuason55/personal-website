import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Joshua's Personal Website</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Joshua Son Personal Website" />
      </Helmet>
      <Navbar />
      <Home />
  </div>
  );
}

export default App;
