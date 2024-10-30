import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <>
        <div className="Lcontainer">
          <div className="lbackground">
            <div className="Lcontain">
                <div className="Lsvg">
                  <img className='loginlogo' src="./images/logo.png" alt="" />
                </div>

                <div className="Lcredentials">
                    <h2 className='Lheaading'>Login</h2>

                    <div className="Lpencontainer">

                      
                      <div className="Lemail">
                        <p className="Lemailtext">Your E-mail</p>
                        <input className='Linemail' type="email" name="" id="" placeholder='   Your E-mail'/>
                      </div>
                      <div className="Lpassword">
                        <p className="Lpasswordtext">Your Password</p>
                        <input className='Linpassword' type="password" name="" id="" placeholder='   Password'/>
                      </div>

                    </div>

                    <div className="Lbtncheck">
                      <label htmlFor="mycheck"><input className='Lincheck' type="checkbox" name="" id="mycheck" />Accept Terms and Conditions</label>
                      <button className="Lcontinue">
                        Continue
                      </button>
                      <p className="signup">Dont have an Account? <span>Signup</span></p>
                    </div>
                    
                    <div className="Lgooglecontainer">

                      <div className="Lgoogle">
                        <img className="Lgoogleimg" src="./images/google.png" alt="" />
                      </div>
                      <div className="Lfacebook">
                        <img className="Lfacebookimg" src="./images/communication.png" alt="" />
                      </div>
                      <div className="Lapple">
                        <img className="Lappleimg" src="./images/apple-logo.png" alt="" />
                      </div>

                    </div>
                    
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login