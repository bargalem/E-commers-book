import React,{useState,useEffect,useContext} from 'react'

import {UserContext} from "../../../App"
import "./detailsection.style.css"
import {cartContext}from "../../../App"
// import bookimg from "../../../asset/Booksimages/book2.jpg"
import {BookData} from "../../util/BookData"
import {useParams,useNavigate} from "react-router-dom"

export default function DetailSectin() {
const{id}=useParams()
const[bookData,setBookdata]=useState({})
 

const user=useContext(UserContext)
const {cartItem,setcartItem}=useContext(cartContext)

const navigate=useNavigate()


useEffect(()=>{
let newdata=BookData.filter((book)=>book.id==parseInt(id))
console.log(newdata[0])
setBookdata(newdata[0])

},[])

 const handeleAddTocart=()=>{
if(user){
  setcartItem([...cartItem,bookData])
  alert(`the book ${bookData.title}is added to the cart`)
}else{

navigate('/login')
alert("Please login and sing up first")
}
}






  return (
    <section className='detail-section-container'>
      <div className='container'>
<div className='flex-container'>
<div className='book-img-container'> 
<img src={bookData.imageLink} alt="book image "/>
</div>

<div className='book-detail-container'> 
<h1>{bookData.title}</h1>

<div ><span style={{color:'orange'}}>{bookData.author}</span></div>
<div className='book-description'>{bookData.discreption}
</div>
<div><b>Language:</b> {bookData.language}</div>
<div><b>Book Length:</b> {bookData.pages} Pages</div>

<h2> &#8377; {bookData.Price}</h2>
<a onClick={handeleAddTocart} className='cart-button'>Add to cart</a>


</div>

</div>
      </div>
    </section>
  )
}
