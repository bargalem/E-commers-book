import React from 'react'

import loginpage from "../../../src/asset/loginbook.jpg"
import Navbar from "../../components/layouts/navbar/Navbar"
import Authform from '../../components/forms/authform/Authform'



export default function LoginPage() {
  return (
    <section>
      <Navbar darkThem={true} />
      <div className="singup-container">
        <div className="singup-img-container">
          <img src={loginpage} alt="login book img" />
        </div>
        <div className="singup-content-container">
          <div className="container">
            <div className="content-wrapper">
              <h2>Login Page </h2> <br></br>
              <div> Login with Email and Password</div>
              <Authform buttonname="Login"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
