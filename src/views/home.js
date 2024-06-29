import React, { useState } from "react";
import HomePrime from "./homePrime";

const Home=()=>{

const[username,setUsername]=useState("");
const[phone,setPhone]=useState("");

const saveClick =()=>{
    alert("save clicked");
}

const phoneChange =(e)=>{
    setPhone(e.target.value);
}
    return(
        <>
        <h1>Hello World</h1>
        <HomePrime 
        name={username} 
        age="12" 
        saveClick={saveClick}
        phone={phone}
        phoneChange={phoneChange}
        />
        </> 
    )
}

export default Home;