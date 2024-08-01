import React, { useContext, useEffect, useState } from 'react'
import '../../styles/style.css'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { BACKEND_URL } from '../../store/actionType';

export const OrderFinal = () => {
    let {showCart, setShowCart, token} = useContext(AuthContext) ;
    let [isError, setIsError] = useState(false) ;
    let [showSuccessOrder, setShowSuccessOrder] = useState(false) ;

    useEffect(()=>{
        setIsError(false) ;
        setShowSuccessOrder(false) ;
    },[])

    async function handleOrderFunc(){
        try {
            let instance = axios.create({
                headers : {
                    Authorization : `Bearer ${token.accessToken}`
                }
            })
            let res = await instance.delete(`${BACKEND_URL}/cart/deleteAll`) ;
            console.log(res) ;
            setShowSuccessOrder(true) ;
        } catch (error) {
            console.log(error) ;
            setIsError(true) ;
        }
    }

  return (
    <>
    <div className="loginDiv1">
        <div className="loginDiv1Child1Div">
            <h3 onClick={()=>setShowCart(false)}>X</h3>
            <h1>{isError && <b>Error Occurred while emptying the cart ! </b>}</h1>
            {!isError && showSuccessOrder && <p>CONGRATS ! YOU HAVE ORDERED SUCCESSFULLY</p> }
            <div>
                <div>
                <form>
                    <br/>
                    {!isError && !showSuccessOrder && <button onClick={(e)=>{e.preventDefault(); handleOrderFunc()}}> CONFIRM ORDER SUCCESS </button> }
                </form>
             </div>
            </div>
        </div>
    </div>
    </>
  )
}
