import React,{useState} from 'react'
import {useNavigate}from "react-router-dom"
import "./Searchinputform.style.css"


export default function SearchInputForm() {
const[searchfield,setsearchfield]=useState('')
const navigate=useNavigate()

  const handleinputSearch=(e)=>{
    setsearchfield(e.target.value)
    
  }


  const redirectSearch=()=>{
if(searchfield===''){
  alert("search is empty")
}else{


navigate('/search',{state:searchfield})}
  }

  return (
    <div className='search-input-form-container'>
      <input type="text"
       className='search-input'
       placeholder='Search Books'
value={searchfield}
onChange={handleinputSearch}
       ></input>
      <button onClick={redirectSearch} className='search-button'>search</button>
    </div>
  )
}
