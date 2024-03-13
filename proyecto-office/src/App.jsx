// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      
      <div className="container">
        <Header />
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;

