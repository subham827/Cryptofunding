import React from 'react'
import { useState,useEffect } from 'react'
import { ethers } from 'ethers';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 10px 50px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
`;

const WelcomeMessage = styled.h1`
  color: white;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const Transactions = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  width : 60vw;
  margin : 0 auto;
  height : 10vh;
  border-radius: 20px;
  margin-bottom : 20px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  width: 130px;
  height: 50px;
  border-radius: 20px;
  background-color: grey;
 border: none;
 font-size: 26px;
 font-weight: 600;
  color: white;
  margin: 0 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: purple;
    color: #ffffff;
    transform: scale(1.05);
  }
`;
const Memos = ({state}) => {
    let mama = [];
    const [memos,setMemos] = useState([]);
    const {contract} = state;
    useEffect(()=>{
        const getMemoss = async()=>{
            const memos = await contract.getMemos();
            mama = [...memos]
            mama.reverse()
           
            setMemos(mama);

        }
      contract && getMemoss();
    },[contract])
    console.log(memos);
  return (
    <>
    <div className='container messages'>

    
    {memos.length===0 ? <h3>Loading...</h3> :  memos.map((memo,index)=>{
        return(
            <Transactions>
                
                <h3 className='mx-2'>{memo.name}</h3>
                <p className='mx-2'>{memo.message}</p>
                {/* <p>{memo.from}</p> */}
            </Transactions>
        )
    })
    }
    </div>
    </>
  )
}

export default Memos