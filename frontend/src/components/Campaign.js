import React from 'react'
import { useState,useEffect } from 'react'
import { ethers } from 'ethers';
import { Link } from 'react-router-dom';
import Buy from './Buy';
import Memos from './Memos';

const Campaign = ({state,data}) => {
    console.log(data);
    
  return (

    <>
    <div className='container'>
         <h1 style={{color: "purple"}}>{data.name}</h1>
        
            <p>{data.text}</p>
         
         <p><span > We require only</span>  {(Math.round((data.amounts/162732.39) * 100000) / 100000).toFixed(5)} Ethers </p>
       <div style={{height: "10vh"}}></div>
        <div className='container'> 
          <h3>Every donation chimes happiness 😀</h3>
        </div>
    </div>
        

    <Buy state={state}></Buy>
    <Memos state={state}></Memos>
    <br></br>
    <br></br>
    <br></br>
    <br></br><br></br>
    <br></br><br></br>
    <br></br>
    
    </>
  )
}

export default Campaign