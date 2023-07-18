import React from 'react'
import "./Showcase.style.css"
import Navbar from '../navbar/Navbar'
import SearchInputForm from '../../forms/searchinputforms/SearchInputForm'


export default function Showcase() {
  return (
    <section className='showcase-Container'>
<Navbar darkThem={false}></Navbar>
        <div className='display'>
     <div className='showcase-Content'>
<h1>Best <span style={{color:' orange'}}>Book</span> Available</h1>
<p>By quality books at cheaper price</p>
     </div>
     <SearchInputForm/>
     </div>
     
    </section>
  )
}
