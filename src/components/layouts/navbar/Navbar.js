import React ,{useContext}from 'react'
import "./Navbar.style.css"
import{Link,useNavigate}from "react-router-dom"
import { UserContext } from '../../../App'
import Cartimg from  "../../../asset/Booksimages/carticon.jpg"
import{getAuth,signOut} from "firebase/auth"
import app from "../../../firebase/Firebase"

export default function Navbar({darkThem}) {
  

const user=useContext( UserContext)
const auth=getAuth(app)
const navigate=useNavigate()


const handlelogout=()=>{
  signOut(auth).then(()=>{
    navigate('/')
  })
  .catch((err)=>{
console.log(err)
  })
}

const showLogintAndSingup=(
  <nav className='nav-links-Container'>
  <Link  to="/"className='nav-links'>Home</Link>
  <Link to="/books"className='nav-links'>Books</Link>
  <Link  to="/login"className='nav-links'>Login</Link>
  <Link to="/singup"className='nav-links'>Sing-up</Link>
  </nav>
)

const showLogoutAndCart=(
  <nav className='nav-links-Container'>
  <Link  to="/"className='nav-links'>Home</Link>
  <Link to="/books"className='nav-links'>Books</Link>
  <a  onClick={handlelogout} className='nav-links'>LogOut</a>
  
<Link  to="/cart"><img src={Cartimg}alt="cart icon" className='carticon'></img> </Link>
  </nav>
)


  return (
    <section className={`navbar-Container ${darkThem ?'background-dark relative' : 'background-transparant'} `}>
      <div className='container flex justify-center align-center'>
      <a href="#"className='logo'>Book<span className='text'>worm</span></a>

{user ?showLogoutAndCart:showLogintAndSingup}




      </div>
    </section>
  )
}
