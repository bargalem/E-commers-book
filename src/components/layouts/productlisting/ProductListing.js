import React from 'react'
import "./productlisting.style.css"
import ProductlistingCard from '../../card/product-listing-card/ProductlistingCard';
import {BookData} from "../../util/BookData"


//asset/book-image/book1"
export default function ProductListing() {
  
  return (
    <div className="product-listing-container">
      <div className="container">
        <h2>
          Here are some <span style={{ color: "orange" }}>books </span> that you
          might like
        </h2>

        <div className="listing-container">
         {BookData.slice(0,4).map((book,id)=>{
          return( <div key={id}>
           <ProductlistingCard BookData={book}/>
           </div>
          )})} 
  
          
        </div>
      </div>
    </div>
  );
}
