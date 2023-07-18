import React,{useContext} from 'react'
import "./cartitemcontainer.style.css"
import CartItemCart from '../../card/card-item-card/CartItemCart'

import {cartContext} from "../../../App"

export default function CartItemContainer() {
const {cartItem,totalAmount}=useContext(cartContext)
console.log(cartItem)
  return (
    <section className='cart-items-container'>
      <div className='container'>
{totalAmount===0 ?(
<h2>Currently Your Cart is Empty</h2>
):(
  <React.Fragment>
    <h2>cart</h2>
{cartItem.map((item)=>{
  return(
   
 <CartItemCart key={item.id} bookData={item}/>
)})}

<h2>Total Amount=&#8377; {totalAmount}</h2>
  </React.Fragment>
)}
        </div>
    </section>
  )
}
