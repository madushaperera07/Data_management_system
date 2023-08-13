import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className='head'>
    <h1>Data Management System</h1>
    
    <div className='home-page'>
    <div className='link-container'>
      <Link className='link' to="/Add">Add</Link>
    </div>
    <div className='link-container'>
      <Link className='link' to="/Read">Read</Link>
    </div>
    <div className='link-container'>
      <Link className='link' to="/Update">Update</Link>
    </div>
    <div className='link-container'>
      <Link className='link' to="/Delete">Delete</Link>
    </div>
    <div className='link-container'>
      <Link className='link' to="/List">List</Link>
    </div>
    </div>
    </div>
    </>
  );
}

export default Home;