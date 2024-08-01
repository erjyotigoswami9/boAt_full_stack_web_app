import React, { useContext, useEffect, useState } from 'react'
import '../../styles/style.css'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios' ;
import { OrderFinal } from './OrderFinal';
import { useSelector, useDispatch } from 'react-redux'
import { BACKEND_URL, fetCartData } from '../../store/actionType';

export const Cart = () => {
    let {showCart, setShowCart, token, setToken, isLogin} = useContext(AuthContext) ;
    let [showOrderDiv, setOrderDiv] = useState(false) ;
    let [qty,setQty] = useState(1) ;

    let [cartDataList, setCartDataList] = useState([]) ; 
    let [isError, setIsError] = useState(false) ;
    let [sumNo, setSumNo] = useState(0) ;

    let dispatch = useDispatch() ;
    let cartData = useSelector(state=>state.cartReducer) ;
    let cartPrice = useSelector(state=>state.cartPrice) ;   

    async function getCartDataListItems(){
       let cart_url = `${BACKEND_URL}/cart/data` ;
       if(isLogin){
       try {
        let instance = axios.create({
            headers : {
                Authorization : `Bearer ${token.accessToken}` 
            }
        }) 
        dispatch(fetCartData({instance}))

       } catch (error) {
          console.log(error) ;
          setIsError(true)
       }
       }else{
        alert('pls login first') ;
       }
    }

    useEffect(()=>{
        let sumItems=0 ;
        for(let i = 0 ; i<cartDataList.length ; i++){
            sumItems+=Number(cartDataList[i].productPrice)*Number(cartDataList[i].quantity) ;
        }
        setSumNo(sumItems) ;

    },[cartDataList])

    useEffect(()=>{
        setIsError(false) ;
        getCartDataListItems() ;
    },[])

    useEffect(()=>{
        console.log("quantity change to", qty) ;
    },[qty])

    async function handleQtyChange(id,qty2){
        try {
            // console.log(id) ;
            // console.log(qty2) ;
            let instance = axios.create({
                headers : {
                    Authorization : `Bearer ${token.accessToken}` 
                }
            }) 
            let res = await instance.patch(`${BACKEND_URL}/cart/update/${id}`,{quantity : qty2}) ;
            // console.log(res) ;

            dispatch(fetCartData({instance}));
        
        } catch (error) {
            console.log(error) ;
        }
    }
  return (
    <>
    {showOrderDiv ? cartData.data && cartData.data.length>0 && <OrderFinal/> : 
        <div className="cartShowDiv1">
            
        <div className="cartShowDiv1ChildNo1Div1">
            <div className="crossCartDiv2">
                <h2>Your Cart</h2>
                <h2 onClick={()=>{setShowCart(!showCart)}}>X</h2>
            </div>
            
            <div className="scrollDiv2CartSection2">
            <div className="scrollDiv2CartSection">
                {isError ? <h5 style={{marginTop:"200px", color:"red", textAlign:"center"}}>Cart Is Empty! pls Login</h5> : 

            <>

            {
                cartData.data && cartData.data?.length>0 && cartData.data?.map(cartItem=>{
                    return(
                        <div className="productInCartDetailDiv2" key={cartItem._id}>
                        <div>
                            <img width="80" height="80" src={cartItem?.imgSrc} alt="img"/>
                        </div>
                        <div>
                            <div>
                                <div>
                                   <h4>{cartItem?.productName}</h4>
                                   <h3> ₹ {cartItem?.productPrice}</h3>
                                </div>
                                <img width="20" height="20" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" onClick={()=>{handleQtyChange(cartItem.productId, 0)}} alt="img"/>
                            </div>
                            <div>
                                <p>PebbleBlack</p>
                                <div>
                                    <button onClick={()=>{ handleQtyChange(cartItem.productId, cartItem?.quantity-1)}}> - </button>
                                    <span> {cartItem.quantity} </span>
                                    <button onClick={()=>{ handleQtyChange(cartItem.productId, cartItem?.quantity+1)}}> + </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
               
            
            </>
            }
            </div>
            
        </div>
            {!isError &&
            <div className="ordersRatesDiv1">
                <div>
                   <h4>₹ {cartPrice.price} </h4>
                   <p>Inclusive of all taxes</p>
                </div>
                <div>
                   <button onClick={()=>setOrderDiv(true)}>Confirm Order</button>
                </div>
            </div>
            }
        </div>
    </div>
}
    </>
  )
}
