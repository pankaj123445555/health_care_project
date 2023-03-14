import React, { useState } from "react";
import {toast} from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


  function  Signup () {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
   const[age,setAge] = useState();
   const [confirm,setConfirm] = useState();
   const submitHandler = async() =>{
   
    if(password!=confirm)
    {
      toast('password does not match');
      return;
    }
    // lets just call the api
    try {
      console.log('khiladi.....')
      const config = {
        header: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/signup",
        { name, email, password, age },
        config
      );
      toast('user registered successfully');
    } catch (error) {
      console.log(`error occured ${error}`)
    }
    console.log(name,email,password,confirm,age);
   }
  return (
     <div>
     <label for="fname"> name:</label><br></br>
     <input  onChange={(e) => setName(e.target.value)}/><br/>
     <label for="fname">Email:</label><br></br>
     <input  onChange={(e) => setEmail(e.target.value)}/><br/>
     <label for="fname">password:</label><br></br>
     <input  onChange={(e) => setPassword(e.target.value)}/><br/>
     <label for="fname">confirm-password:</label><br></br>
     <input  onChange={(e) => setConfirm(e.target.value)}/><br/>
     <label for="fname" >age:</label><br></br>
     <input  onChange={(e) => setAge(e.target.value)}/><br/>
     <button onClick={submitHandler}>Submit</button>
     </div>
  )
}

export default Signup
