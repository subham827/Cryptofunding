import styled from 'styled-components';
import AdminDashboard from './components/AdminDashboard';
import './App.css';
import { useState,useEffect } from 'react';
import { createContext } from 'react';
import { ethers } from 'ethers';
import abi from "./contracts/Funds.sol/funds.json";
import Account from './components/Account';
import Home from './components/Home';
import Campaign from './components/Campaign';
import { BrowserRouter as Router,Switch,Route as Routes} from "react-router-dom"
import Landing from './components/Landing';
import SignupPage from './components/SignupPage';

const Container = styled.div`
 
  height: 100vh;
  background-image: url("ws_Purple_Balls_1600x1200.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 40px;
`;
// add hover effect to button


const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  color: white;
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  background-color: #0d6efd;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
const Span = styled.span`
  position: relative;
  color: white;
  font-size: 20px;
  font-style: italic;
  margin-left: 100px;
  
  
`;
const Logo = styled.div`
  
  position: absolute;
  top: 20px;
  left: 45vw;

  font-size: 24px;
  color: white;
  
`;

export const AppContext = createContext();
function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [data,setData] = useState({
    name : null,
    text : null,
    amounts : null
  });
  const [state, setState] = useState({
    provider : null,
    signer : null,
    contract : null
  })

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setWindowSize(window.innerWidth);
    })
    const connectWallet = async()=>{
    const contractaddress = "0xE1D4d8b280bfC1095f6F1aDD69a359415BdF40c7"
     const contractAbi = abi.abi;
     try{
      const {ethereum} = window;
      if(ethereum){
        const account = await  ethereum.request({method: 'eth_requestAccounts'});

     }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractaddress,contractAbi,signer);
      setState({provider,signer,contract});}
      catch(error){
        console.log("e aagaya", error);
      }}
      connectWallet();

    
    
  },[])
  // console.log(state);
  return (
    
    <>
    {windowSize > 1000 ? (  <Router>
    
    <Switch>
        <Routes exact path='/'><Landing></Landing></Routes>
      <Routes exact path="/signup"><SignupPage setUsername={setUsername} setEmail={setEmail}></SignupPage></Routes>
        <Routes exact path ='/home'><Home setData={setData} username={username}></Home></Routes>
        <Routes exact path = '/campaign'><Campaign state={state} data={data} setData={setData} username={username}></Campaign></Routes>
      </Switch>
  </Router>):(<div>Please switch to desktop mode</div>)}
 
    </>
  );
}

export default App;
