import React, { useContext, useEffect, useState } from 'react'
import '../../styles/style.css'
import { AuthContext } from '../../context/AuthContext'
import { Signup } from './Signup';
import { Logout } from './Logout';
import axios from 'axios' ;
import { BACKEND_URL } from '../../store/actionType';

export const Login = () => {
  let { showLoginDiv, setShowLoginDiv, showSignupDiv, setShowSignupDiv, showLogoutDiv, setShowLogoutDiv, isLogin, setIsLogin } = useContext(AuthContext) ;
  
  let [dataLogin, setLoginData] = useState({email:"",password:""}) ;
  let [isError, setIsError] = useState(false) ;

  let {token,setToken} = useContext(AuthContext) ;

  useEffect(()=>{
    setIsError(false) ;
  },[])


  async function loginTokenGenerate(e){
    e.preventDefault() ;
    const url_login = `${BACKEND_URL}/users/login` ;
    if(dataLogin.email!="" && dataLogin.password!=""){
      try {
      //  console.log(dataLogin) ;
       let res = await axios.post(url_login,{...dataLogin}) ;
      //  console.log(res.data) ;
       if(res.data.accessToken){
        setToken({...res.data}) ;
        setLoginData({email:"", password:""}) ;
        setIsLogin(true);setShowLogoutDiv(!showLogoutDiv);
       }
       else{
        console.log(isError) ;
          setIsError(true) ;
       }
      } catch (error) {
        console.log(error) ;
        setIsError(true) ;
      }
    }
  }

  return (
    <>
   { isLogin ?  <Logout/> : 
    <div className="loginDiv1">
        <div className="loginDiv1Child1Div">
            <h3 onClick={()=>setShowLoginDiv(!showLoginDiv)}>X</h3>
            <h1>Get <b>started</b></h1>
            <p>{ isError ? "invalid credentials !" : "Please enter your credentials to continue"}</p>
            <div>
                <div>
                <form>
                    <label>Enter Email</label><br/>
                    <input type="email" placeholder="Type email Here" value={dataLogin.email} onChange={(e)=>setLoginData({...dataLogin, email:e.target.value})} /><br/>
                    
                    <label>Enter Password</label><br/>
                    <input type="password" placeholder="Type password Here" value={dataLogin.password} onChange={(e)=>setLoginData({...dataLogin, password:e.target.value})} /><br/>
                    <button onClick={(e)=>{ loginTokenGenerate(e);}}> LOGIN </button>
                </form>
                <p>By Confirming, you agree to boAt's Terms and Conditions and Privacy Policy. <b onClick={()=>setShowSignupDiv(!showSignupDiv)}>SignUp here</b> </p>
                </div>
            </div>
        </div>
    </div>
    }
    {showSignupDiv && <Signup/>}
    </>
  )
}
