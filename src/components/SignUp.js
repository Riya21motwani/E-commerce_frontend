import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp =()=>{

    const [name,setName]=useState("");
    const [password, setPassword]=useState("");
    const[email,setEmail]=useState("");
    const navigate=useNavigate();

   
//  localStorage.getItem('user') checks if the user is logged in.
//  If auth exists, the user is redirected to / (home).
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[])
    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch('https://ecommerce-backend-1-x0ct.onrender.com/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

    
        result = await result.json(); 
        console.warn(result); 
        localStorage.setItem("user" , JSON.stringify(result))
        navigate('/')
        

    }
    

    return(
        <div className="register">
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>Register</h1>
            <input className ="inputbox" type ="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name "/>
            <input className ="inputbox" type ="text" value={email} onChange={(e)=>setEmail(e.target.value)}placeholder="Enter Email "/>
            <input  className ="inputbox" type ="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password "/>
            <button onClick={collectData} className="appbutton" type ="button">Sign Up</button>
        </div>
    )
}

export default SignUp