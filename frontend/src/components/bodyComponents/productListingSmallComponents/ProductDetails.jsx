import React, { memo, useContext, useEffect, useState } from "react";
import "../../../styles/style.css";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from 'react-router-dom'
import axios from 'axios' ;
import { BACKEND_URL } from "../../../store/actionType";

export const ProductDetails = memo(({product}) => {
  let {productObj, setProductObj} = useContext(AuthContext) ;
  let navigate = useNavigate() ;

  function handleGoToSingleProduct(){
    setProductObj({...product}) ;
    navigate('/product')
  }

  let { token, isLogin } = useContext(AuthContext) ;
    let [isError, setIsError] = useState(false) ;


    useEffect(()=>{
        setIsError(false) ;
    },[])

    async function handleAddToCartItem(e){
       e.stopPropagation() ;
        try {
            let instance = axios.create({
                headers : {
                    Authorization : `Bearer ${token.accessToken}`
                }
            })
            let cart_add_url = `${BACKEND_URL}/cart/create` ;
            let res = await instance.post(cart_add_url,{productName:product.name, productPrice: product.price, imgSrc: product.imgSrc[0],productId:product._id, quantity:1})
            console.log(res) ;
        } catch (error) {
            console.log(error) ;
            setIsError(true) ;
        }
    }
    

  return (
    <>
      <div onClick={()=>handleGoToSingleProduct()}>
        <div>
          <img
            src={product.imgSrc}
            alt="img"
          />
          <div>Noise cancellation</div>
        </div>
        <div>
          <div className="ratingsDiv2ProductLists">
            <img
              width="15"
              height="15"
              src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
              alt="stars"
            />
            4.9 <span> | </span> 34
            <img
              width="15"
              height="15"
              src="https://cdn-icons-png.flaticon.com/128/3472/3472620.png"
              alt="tick"
            />
          </div>
          <h3>{product.name}</h3>
          <p className="pricesStrikePricesoffer2">
            ₹{product.price} <del> ₹{product.strikeOffPrice} </del> <span> {product.offerRate}% off</span>
          </p>
          <p>
            <span>120 Hours Playback</span>
            <span>BEAST™ Mode</span>
            <span>ENx™ Technology</span>
          </p>
          <button className="addToCartBtnProductList" onClick={(e)=>{handleAddToCartItem(e)}}>Add To Cart</button>
        </div>
      </div>
    </>
  );
});
