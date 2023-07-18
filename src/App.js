
import React,{useState,useEffect,createContext} from "react";
import { Routes,Route } from "react-router-dom";
import app from "./firebase/Firebase"
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import HomePage from "./pages/homepage/HomePage"
import BooksPage from "./pages/bookspage/BooksPage"
import BookDetailPages from "./pages/bookdetailpages/BookDetailPages"
import LoginPage from "./pages/loginpage/LoginPage"
import SingupPage from "./pages/singuppage/SingupPage"
import CartPage from "./pages/cartpage/CartPage";
import SearchPage from "./pages/searchpage/SearchPage";

export const UserContext=createContext({})
export const cartContext=createContext({})


const App=()=> {
const auth=getAuth(app)
const[autanticateduser,setAutanticateduser]=useState(null)
const[cartItem,setcartItem]=useState([])
const[totalAmount,settotalAmount]=useState(0)

useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    if(user){

setAutanticateduser(user)
}else{
  setAutanticateduser(null)
}


})
},[])


useEffect(()=>{
   let total=0;
cartItem.forEach((item)=>{
 total=total+parseInt(item.Price)
})
settotalAmount(total)
},[cartItem])
  
  return (
    <UserContext.Provider value={autanticateduser}>
<cartContext.Provider value={{cartItem,totalAmount,setcartItem}}>
<Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/book-details/:id" element={<BookDetailPages/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/singup" element={<SingupPage />} />
         <Route path="/*" element="Page Not Found" />
      </Routes>

</cartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
