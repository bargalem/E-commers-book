import React ,{useState,useEffect}from 'react'
import{useLocation}from "react-router-dom"
import Navbar from '../../components/layouts/navbar/Navbar'
import Footer from '../../components/layouts/footer/Footer'
import "./searchpage.style.css"
import { BookData } from '../../components/util/BookData'
import SearchresultCard from '../../components/card/searchresultcard/SearchresultCard'


export default function SearchPage() {
const location=useLocation()
const[searchResult,setsearchResult]=useState([])

useEffect(()=>{
let searchvalue=[];
searchvalue=BookData.filter((data)=>data.title.toLowerCase().includes(location.state.toLowerCase()))
setsearchResult(searchvalue)

},[])


  return (
    <section>
      <Navbar darkThem={true}/>
      <div className='search-resule-container'>
        <div className='container'> 
<h2>Your search Result</h2>
{searchResult.map((result)=>{
    return(
     <>
     <SearchresultCard  key={result.id}bookData={result}/>
     </>
    )
})}


        </div>
    </div>
      <Footer/>
    </section>
  )
}
