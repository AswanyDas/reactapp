import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import BlogEntries from './components/BlogEntries'
import BlogEntry from './components/BlogEntry'
import Menu from './components/Menu'
import Post from './components/Post'
import Tags from './components/Tags'
import Footer from './components/Footer'
const divstyle = {
  width: '1400px'
}
function App() {
  return (
    <div className="App" style={divstyle}>
      <Header />
      <BlogEntries />
      <BlogEntry />
      <Menu />
      <Post/>
      <Tags/>
      <Footer/>


    </div>
  );
}

export default App;
