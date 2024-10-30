import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <>
    <div className="Scontainer">
      <div className="sbackground">
        <div className="Scontain">
            <div className="svg">
              <img className='signuplogo' src="./images/logo.png" alt="" />
            </div>

            <div className="credentials">
                <h2 className='SHeading'>Signup </h2>

                <div className="pencontainer">

                  <div className="name">
                    <p className="nametext">Your Name</p>
                    <input className='inname' type="name" placeholder='   Your Name' />
                  </div>
                  <div className="email">
                    <p className="emailtext">Your E-mail</p>
                    <input className='inemail' type="email" name="" id="" placeholder='   Your E-mail'/>
                  </div>
                  <div className="password">
                    <p className="passwordtext">Your Password</p>
                    <input className='inpassword' type="password" name="" id="" placeholder='   Password'/>
                  </div>

                </div>

                <div className="btncheck">
                  <label htmlFor="mycheck"><input className='incheck' type="checkbox" name="" id="mycheck" />  Accept Terms and Conditions</label>
                  <button className="continue">
                    Continue
                  </button>
                  <p className="login">Have an Account? <span>Login</span></p>
                </div>
                
                <div className="googlecontainer">

                  <div className="google">
                    <img className="googleimg" src="./images/google.png" alt="" />
                  </div>
                  <div className="facebook">
                    <img className="facebookimg" src="./images/communication.png" alt="" />
                  </div>
                  <div className="apple">
                    <img className="appleimg" src="./images/apple-logo.png" alt="" />
                  </div>

                </div>
                
            </div>
        </div>
      </div>
    </div>
</>
  )
}

export default Signup