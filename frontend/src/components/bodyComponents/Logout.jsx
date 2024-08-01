import React, { useContext, useEffect, useState } from 'react'
import '../../styles/style.css'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { BACKEND_URL } from '../../store/actionType'

export const Logout = () => {
    let {isLogin, setIsLogin, showLogoutDiv, setShowLogoutDiv, showLoginDiv, setShowLoginDiv, token, setToken} = useContext(AuthContext) ;

    let [isError, setIsError] = useState(false) ;

    useEffect(()=>{
      setIsError(false) ;
    },[])

    async function logoutHandleFunc(e){
      e.preventDefault() ;
      const logout_url = `${BACKEND_URL}/users/logout` ;
      try {
       let instance = axios.create({
        headers : {
          Authorization : `Bearer ${token.accessToken}`
        }
       })
       let res = await instance.get(logout_url) ;
      //  console.log(res) ;
        setIsLogin(false)
      } catch (error) {
        setIsError(true) ;
      }
    }
  return (
    <>
    <div className="loginDiv1">
        <div className="loginDiv1Child1Div">
            <h3 onClick={()=>setShowLoginDiv(false)}>X</h3>
            <h1><b>{isError && "error while logout, invalid login Token ! pls login back "}</b></h1>
            <p>Are you sure , you want to logout ?</p>
            <div>
                <div>
                <form>
                    <br/>
                    <button onClick={(e)=>{logoutHandleFunc(e)}}> LOGOUT </button>
                </form>
             </div>
            </div>
        </div>
    </div>
    </>
  )
}
