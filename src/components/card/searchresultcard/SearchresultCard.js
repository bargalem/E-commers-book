import React from 'react'
import {Link} from "react-router-dom"
// import "./cart-item-cart.style.css"

import "./searchresult.style.css"

// import cartimg from "../../../asset/Booksimages/book1.jpg"
export default function SearchresultCard({bookData}) {





  return (
    <section>
      <div className='cart-item'>
<div className='cart-item-img-container'>
< img src={bookData.imageLink}alt="cart img"className='cart-item-img'/>
</div>
<div className='cart-item-content-container'>
<h2>{bookData.title}</h2>
<h5>{bookData.author}</h5>
<Link to={`/book-details/${bookData.id}`} className='showdetail-btn'>Product Detail</Link>

</div>

</div>
    </section>
  )
}
