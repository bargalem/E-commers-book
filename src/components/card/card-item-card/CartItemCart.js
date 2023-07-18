import React,{useContext}from 'react'
import "./cart-item-cart.style.css"
import { cartContext } from '../../../App'
// import cartimg from "../../../asset/Booksimages/book1.jpg"
export default function CartItemCart({bookData}) {

const{cartItem,setcartItem}=useContext(cartContext)

const handleRemove=()=>{
  console.log(bookData.id)
  setcartItem(cartItem.filter((item)=>item.id!==bookData.id))
}


  return (
    <section>
      <div className='cart-item'>
<div className='cart-item-img-container'>
< img src={bookData.imageLink}alt="cart img"className='cart-item-img'/>
</div>
<div className='cart-item-content-container'>
<h2>{bookData.title}</h2>
<h5>{bookData.author}</h5>
<h3 className='cart-item-price'>&#8377;{bookData.Price}</h3>
<button onClick={handleRemove} className='delete-button'>Remove from the Cart</button>
</div>

</div>
    </section>
  )
}
