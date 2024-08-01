import React, { useContext, useState } from 'react'
import '../../styles/style.css'
import { AuthContext } from '../../context/AuthContext'
import { BACKEND_URL } from '../../store/actionType'
import axios from 'axios' ;

export const Signup = () => {
    
    let {showSignupDiv, setShowSignupDiv} = useContext(AuthContext) ;
    let [createUserDataSignUp, setCreateUserDataSignup] = useState({name:"", phone:"", email:"", password:"",role:""}) ;

    async function handleSubmitFunc(e){
        e.preventDefault() ;
        if(createUserDataSignUp.name!="" && createUserDataSignUp.email!="" && createUserDataSignUp.password!="" && createUserDataSignUp.phone!="" && createUserDataSignUp.role!=""){
            // console.log(createUserDataSignUp) ;
            try {
                let signup_url = `${BACKEND_URL}/users/signup` ;

                let res = await axios.post(signup_url, {...createUserDataSignUp}) ;
                // console.log(res) ;

                setCreateUserDataSignup({name:"", role:"", phone:"", password:"", email:""}) ;
                setShowSignupDiv(!showSignupDiv) ;   
            } catch (error) {
                console.log(error) ;
            }
        }
    }
  return (
    <>
    <div className="loginDiv1 extraLoginDetailsDiv2">
        <div className="loginDiv1Child1Div ">
            <h3 onClick={()=>setShowSignupDiv(false)}>X</h3>
            <h1>Get <b>started</b></h1>
            <p>Create your account</p>
            <div>
                <div>
                <form>
                    <label>Enter Name</label><br/>
                    <input type="text" placeholder="Type username Here" value={createUserDataSignUp.name} onChange={(e)=>setCreateUserDataSignup({...createUserDataSignUp, name:e.target.value})} /><br/>

                    <label>Enter Role</label><br/>
                    <input type="text" placeholder="Type role Here" value={createUserDataSignUp.role} onChange={(e)=>setCreateUserDataSignup({...createUserDataSignUp, role:e.target.value})} /><br/>

                    <label>Enter Phone Number</label><br/>
                    <input type="number" placeholder="Type mobile number Here" value={createUserDataSignUp.phone} onChange={(e)=>setCreateUserDataSignup({...createUserDataSignUp, phone:e.target.value})} /><br/>

                    <label>Enter Email</label><br/>
                    <input type="email" placeholder="Type email Here" value={createUserDataSignUp.email} onChange={(e)=>setCreateUserDataSignup({...createUserDataSignUp, email:e.target.value})} /><br/>

                    <label>Enter Password</label><br/>
                    <input type="password" placeholder="Type password Here" value={createUserDataSignUp.password} onChange={(e)=>setCreateUserDataSignup({...createUserDataSignUp, password:e.target.value})} /><br/>
                    <button onClick={handleSubmitFunc}> SIGNUP </button>
                </form>
                <p>By Confirming, you agree to boAt's Terms and Conditions and Privacy Policy.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
