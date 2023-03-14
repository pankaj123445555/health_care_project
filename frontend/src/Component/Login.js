import React,{useState} from 'react'
import {toast} from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Login() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  // const history = useHistory();
  
  const SubmitHandler = async() =>{
   
    if(!email || !password)
    {
      toast('enter a valid email and password');
      return;
    }
    try {
      const config = {
        header: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/login",
        { email, password },
        config
      );
      console.log(data);
      window.location.href = "/diet-plan";
      
    } catch (error) {
       toast(`something error occured ${error}`)
    }
  
    
  }
  return (
    <div>
    
    <label for="fname">Email:</label><br></br>
    <input onChange={(e) => setEmail(e.target.value)}/><br/>
    <label for="fname">password:</label><br></br>
    <input onChange={(e) => setPassword(e.target.value)}/><br/>
    <button onClick={SubmitHandler}>Submit</button>
    </div>
  )
}

export default Login
