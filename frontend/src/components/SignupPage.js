import React from 'react';
import './SignupPage.css';
import {Link} from 'react-router-dom';

function SignupPage({setUsername}) {
  return (
    <div className="signup-container">
      <div className='rules'>
        <h5>Simple ethereum based funding platform 🪙</h5>
        <ul>
          <li>Don't create unusual Campaigns</li>
          <li>Respect the community </li>
          <li>Look Right ➡️</li>
        </ul>
      </div>
      <div className='forms'>

      {/* <h1>Let's know you</h1> */}
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={(e)=> setUsername(e.target.value)}/>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

       
        <Link to="/home">
        <button type="submit">Take off 🛫</button>
          </Link>
      </form>
    </div>
      </div>
  );
}

export default SignupPage;
