import React from 'react'
import VideoBg from '../Fin.mp4'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <div className='landing'>
        <video src={VideoBg} autoPlay loop></video>
  <div className='content'>
    <h1>Crypto<span style={{color : "green"}}>funding</span></h1>
    <p >Create, Donate, Raise 🪙</p>
    <Link to="/signup"><button>GET STARTED</button></Link>
  </div>
    </div>
  )
}

export default Landing