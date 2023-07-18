import React from 'react'
import "./footer.style.css"
export default function Footer() {
  return (
    <section>
    <div className='footer-container'>
     <div className='container'>
        <h2>If you have any Queries feel free to ask here.</h2>

<form className='footer-form'>
    <div className='form-group'>
        <label htmlFor="name" className='form-lable'>Name:</label>
<input type='text' id="name"   className='form-input'placeholder='Enter your name'/>
    </div>

    <div className='form-group'>
    <label htmlFor="email" className='form-lable'>Email:</label>
<input type='email' id="email" className='form-input'placeholder='Enter your email'/>
    </div>


    <div className='form-group'>
    <label htmlFor="query" className='form-lable'>Query:</label>
<textarea id="query"  className='form-input'placeholder='Type your Queries'/>
    </div>



    <div className='form-group'>
    <a href="#"className='form-submit'>submit</a>
    </div>
</form>

<p>$copy:2023 BokWorm.All Right Reserved.</p>
     </div>
    </div>
    </section>
  )
}
