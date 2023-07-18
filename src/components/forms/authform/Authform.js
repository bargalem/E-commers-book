import React,{useState} from 'react'
import app from "../../../firebase/Firebase"
import{ getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword}from 'firebase/auth'

// import axios from 'axios'
 import {useNavigate} from 'react-router-dom'

export default function Authform({buttonname}) {
 const navigate=useNavigate()


const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[username,setUsername]=useState('')



const handleSubmit=(event)=>{
event.preventDefault();
console.log("form submit")
const auth=getAuth(app)

if(buttonname==="Login"){
  signInWithEmailAndPassword(auth,email,password)
  .then(()=>{
    navigate('/')
  })
  .catch((err)=>{
console.log(err)
  })
}else{
  createUserWithEmailAndPassword(auth,email,password)
  .then((usercedatiol)=>{
    usercedatiol.user.displayName=username
    navigate('/')
  })
  .catch((err)=>{
    console.log(err)
  })
}





}
  return (
    <section>
      <form onSubmit={handleSubmit}>
      {buttonname==="Sing up" && (<div className='form-group'>
    <label >User Name</label>
<input id="userinput" 
type='text'
className='form-input'
placeholder='Enter your Name'
value={username}
onChange={(event)=>setUsername(event.target.value)}
>
  
</input>
  </div>)}


  <div className='form-group'>
    <label >Email</label>
<input id="Emailinput" 
type='email'
className='form-input'
placeholder='Enter your Email'
value={email}
onChange={(event)=>setEmail(event.target.value)}
>
  
</input>
  </div>

  <div className='form-group'>
    <label>Password</label>
<input id="passwordinput" 
type='password'
className='form-input'
placeholder='Enter your password' 
value={password}
onChange={(event)=>setPassword(event.target.value)}
>
 
</input><br></br>
Password have 6 character Must be Require

  </div>

  <div className='form-group'>
   
<input type='submit'
className='form-btn'
 value={buttonname}

></input>
  </div>


</form>
    </section>
  )
}
