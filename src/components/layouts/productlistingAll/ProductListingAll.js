import React from 'react'
import "./productlistingall.style.css"
import ProductlistingCard from '../../card/product-listing-card/ProductlistingCard'
import Footer from "../footer/Footer"
import {BookData} from "../../util/BookData"

export default function ProductListingAll() {
 
  return (
    <section className='productlistingall-container'>
      <div className='container'>
<div className='grid-container'>

{BookData.map((book,id)=>{
return(
<div className='grid-Item'key={id} >
<ProductlistingCard BookData={book}/>
</div>
)

})}








</div>
</div>
      <Footer/>
      
    </section>
  )
}
