import React, {useState} from 'react'
import Login from   './Login'
import Signup from './Signup'
import '../App.css'

function HomePage() {
    const [loggedin, setLoggedin] = useState(true);
    const [Signedin, setSignedin] = useState(false);
    const solve = ()=>{
        setLoggedin(true);
        setSignedin(false)
    } 
    const solves = ()=>{
        setLoggedin(false);
        setSignedin(true)
    } 
  return (
     <>
     
     <div id='main-page'>
     <div id='login-signup'>
     <button onClick={()=> solve()}>login</button>
     <button onClick={()=> solves()}>signup</button>
     </div>
     
      {loggedin?<Login/>:<Signup/>}
    
     </div>
     
     
     </>
  )
}

export default HomePage
