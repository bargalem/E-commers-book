import React from 'react'
import "./productlistingcard.style.css"
import{Link}from "react-router-dom"
//  import productsimages from "../../../asset/Booksimages/book1.jpg"

// import imges from "../../../asset/img.json"

export default function ProductlistingCard({BookData}) {
console.log(BookData)
  return (
    <div className="product-listing-card">
            <div className="product-listing-image-container">

{/* {imges.map((itm)=>{
return(
  <img src={itm.id}alt="product-listing-image"className='product-listinf-img'></img>
)
})
} */}

             <img src={BookData.imageLink}alt="product-listing-image"className='product-listinf-img'></img>

            </div>
            <div className="product-listing-details-container">
                <h3>{BookData.title}</h3>
                <div>{BookData.author}</div>
                <h4> &#8377;{BookData.Price}</h4>
                
            </div>
            <div className='card-button-container'>
            <Link to={`/book-details/${BookData.id}`} className='product-listing-button'>Add to cart</Link>
            </div>
          </div>
  )
}
