import React from 'react'
import Navbar from '../../components/layouts/navbar/Navbar'
import Footer from '../../components/layouts/footer/Footer'
import CartItemContainer from '../../components/layouts/cardItemContainer/CartItemContainer'

// import  "./cartpage.style.css "


export default function CartPage() {
  return (
    <section>
     
<Navbar darkThem={true}/>
<CartItemContainer/>


<Footer/>

    </section>
  )
}
