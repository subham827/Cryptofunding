import React from 'react'
import { ethers } from 'ethers';
import {useState} from 'react';
const Buy = ({state}) => {
    const [loader,setLoader] = useState(false);
    const [showtoast, setShowToast] = useState(false);
    const buyfund= async(e)=>{
        setLoader(true);
        e.preventDefault();
        const {contract} = state;
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        const amounts = document.getElementById('amounts').value;
        console.log(name,message,contract);
        const amount = {value: ethers.utils.parseEther(amounts)}
        const transaction = await contract.givefund(name,message,amount);
        await transaction.wait();
        



        setLoader(false);
        setShowToast(true);
        // reload page
        window.location.reload();


    }
  return (
   <>

<div className='container'>

   <form   onSubmit={buyfund}>
    <label>Name</label>
    <input  className='form-control' type = "text" id = "name" placeholder='Enter your name'></input>
    <br></br>
    <label>Message</label>
    <input className='form-control' type='text' id = 'message'></input>
    <br></br>
    <label>Amount</label>
    <input className='form-control' type='text' id='amounts'></input>
    <br></br>
    <button className="btn btn-primary">Pay</button>
   </form>
    {loader ? <h3>Processing...</h3> : <h3 style={{color : 'green'
    }}></h3>}
   
</div>

   
   </>
  )
}

export default Buy