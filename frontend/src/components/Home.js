import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './SignupPage.css';
import './custom-scrollbar.css';

export default function Home({setData,username}) {
    const [notes, setNotes] = useState([]);
  
    useEffect(()=>{
        let notess = localStorage.getItem("notes");
        if (notess) {
            setNotes(JSON.parse(notess));
        }
    },[])
  
 
 
  const addnote = () => {
    if (!text) {
      alert("Please enter text");
      return;
    
      
    }
    if(!name){
        alert("Please enter name");
        return;
    }
    if(!amounts || amounts.includes("[a-zA-Z]+")){
        alert("Please enter a valid amount");
        return;
    }
   
    else
    {
        alert("Created !")
        
        console.log("add note clicked");
    const newnote = {
        id: new Date().getTime().toString(),
        name: name,
        text: text,
        amounts: amounts,
    }
    setNotes([...notes, newnote]);
    localStorage.setItem("notes", JSON.stringify([...notes, newnote]));
    
    setText("");
    setName("");
    setAmounts("");

    
}
  };
  const ClearAll = () => {
    console.log("Clear all clicked");
    setText("");
    setName("");
    setAmounts("");
    setNotes([]);
    localStorage.clear();
  }
  const Removenote = (id) => {
    console.log("Remove note clicked");
    console.log(id);
   const updatedNotes = notes.filter(note => note.id !== id);
   
    setNotes(updatedNotes);
  }
  const updataData = (name,text,amounts) => {
    console.log("Update note clicked");
    setData({name,text,amounts});
  }

  const [text, setText] = useState("");
 
  const [name, setName] = useState("");
  const [amounts, setAmounts] = useState("");
 
 
//   console.log(notes);
 
  return (
    <>
    <div className=" heading"><Link to="/"><h1>Crypto<span style={{color:"green"}}>funding</span></h1></Link></div>
      
    <br></br>
    <br></br>
      <div className="container">
        <h2>Welcome  <span style={{color: "goldenrod"}}>{username}</span></h2><div style={{height:"180px"}}></div>


        <h2 style={{color:"white"}}>
          Create a campaign
        </h2>
        <div
          className="mb-3"
          style={{ color: "white" }}
        >
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Campaign Name</label>
            <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter campaign name here" value={name} onChange={(e)=>setName(e.target.value)} style={{width:"200px"}}></input>

          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
            style={{ color: "white" }}
          >Description
            
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Enter your description here"
            style={{width:"500px"}}
          ></textarea>
          <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ color: "white" }}>
            Amount to be raised (in Rupees)
          </label>
            <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your amount here" value={amounts} onChange={(e)=>setAmounts(e.target.value)} style={{width:"200px"}}></input>
            <div style={{height:"20px"}}></div>
            <input type="radio"></input><span style={{color: "grey"}}>Agree to terms and conditions</span>
        </div>
       
       
        <button className="btn btn-primary mx-1" onClick={addnote}>
         Create </button>
      </div>
      <div className="cryptofy">
        <h3>Get latest crypto update <a href="https://monumental-queijadas-661aa2.netlify.app/" style={{color:"blue"}} target="blank">here</a></h3>
        <iframe className="custom-scrollbar" src="https://monumental-queijadas-661aa2.netlify.app/"  title="Cryptofy" alt="loading..."></iframe></div>

      <div className="container my-4">
        
        
       
        <h2 style={{ color: "white" }}>
          {" "}
          Ongoing campaigns
          <br></br>
          <div className="containers" style={{width : "90vw"}}>
          {notes.map((note) => (
            
            
            <div className="card my-2 mx-3" key={note.id} onClick={()=>updataData(note.name,note.text,note.amounts)}>
                <div className="card-body" >
                    <h3 className="card-title" style={{ color: "goldenrod" }}>{note.name}</h3>
                    <h6 className="card-text" style={{ color: "white" }}>Description : {note.text.slice(0,50)}...</h6>
                    <h6 className="card-text" style={{ color: "white" }}>Amount : {(Math.round((note.amounts/162732.39) * 100000) / 100000).toFixed(5)} Ethers</h6>
                  <Link to="/campaign"><button className="btn btn-success mx-1">Donate now</button></Link>
                    
                </div>
            </div>

           
            
            
          ))}
          </div>
          <button className="btn btn-primary btn-sm" onClick={ClearAll} disabled={notes.length<1}>Clear all</button>
        </h2>
        {/* <p id="ss0" style={{ color: props.mode === "dark" ? "white" : "black" }}></p> */}
      </div>
    </>
  );
}
