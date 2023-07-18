import React from 'react'
import Navbar from "../../components/layouts/navbar/Navbar"
import SearchInputForm from "../../components/forms/searchinputforms/SearchInputForm"
import "./bookpages.style.css"
import ProductListingAll from '../../components/layouts/productlistingAll/ProductListingAll'


export default function BooksPage() {
  return (
    <div>
     <Navbar darkThem={true}/>

<div className='search-container'>
  <h2>Find the <span style={{color:'orange'}}>books</span> thant you want</h2>
<SearchInputForm/>
</div>
<ProductListingAll/>
    </div>
  )
}
