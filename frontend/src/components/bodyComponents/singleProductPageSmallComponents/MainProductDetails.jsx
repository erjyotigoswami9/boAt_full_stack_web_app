import React, { memo, useContext, useEffect, useState } from 'react'
import '../../../styles/style.css'
import { AuthContext } from '../../../context/AuthContext'
import axios from 'axios'
import { BACKEND_URL } from '../../../store/actionType'

export const MainProductDetails = memo(({product}) => {

    let { token, isLogin } = useContext(AuthContext) ;
    let [isError, setIsError] = useState(false) ;
    let [imgNo, setImgNo] = useState(0) ;

    useEffect(()=>{
        setIsError(false) ;
    },[])

    async function handleAddToCartItem(e){
       e.preventDefault() ;
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

    function handleNoForImgs(no){
        if(no==5){
            setImgNo(0)
        }else 
        if(no==-1){
            setImgNo(4)
        }else{
            setImgNo(no)
        }
    }
    
  return (
    <>
    <div className="productsShownFisrtDiv1">
            <div>
                <div>
                    <img width="60" height="60" src={product?.imgSrc[1]} alt="img" onClick={()=>setImgNo(1)}/>
                    <img width="60" height="60" src={product?.imgSrc[2]} alt="img" onClick={()=>setImgNo(2)}/>
                    <img width="60" height="60" src={product?.imgSrc[3]} alt="img" onClick={()=>setImgNo(3)}/>
                    <img width="60" height="60" src={product?.imgSrc[4]} alt="img" onClick={()=>setImgNo(4)}/>
                </div>
                <div>
                    <img src={ product?.imgSrc[imgNo]} alt="img"/>
                    <div className="btnsL1R1Img">
                        <button onClick={()=>{handleNoForImgs(imgNo-1)}}>&lt;</button>
                        <button onClick={()=>{handleNoForImgs(imgNo+1)}}>&gt;</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img width="10" height="10" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                    <p>4.9 <span>&nbsp;|&nbsp;</span> 172 reviews</p>
                    <img width="10" height="10" src="https://cdn-icons-png.flaticon.com/128/3472/3472620.png" alt="img"/>
                </div>
                <div>
                    <h1>{product?.name}</h1>
                    <p>{product?.description}
                    </p>
                    <p className="strikeOffPrice1">₹{product?.price} <del>₹ {product?.strikeOffPrice} </del> <span> &nbsp; {product?.offerRate}% Off</span></p>
                    <h4>Check Delivery</h4>
                    <div className="extraDetailsOfProducts">
                        <div className="pincodeDiv1">
                            <div>
                               <input type="number" placeholder="122008" />
                               <button>Change</button>
                            </div>
                            <p className="freeDeliveryP1">
                                <span>Free delivery</span> <span> | By Saturday, 27 Jul</span>
                            </p>
                            {isError ? <p>Error Occurred While adding item to cart </p> : 
                            <p>
                              <span>If ordered within</span><span> 22 hrs 2 mins</span>
                            </p>
                            }
                        </div>
                        <div>
                            <h4>Users' Love</h4>
                        </div>
                        <div className="flpDiv1Achievement">
                            <div>
                                <img width="40" height="40" src="https://cdn-icons-png.flaticon.com/128/16894/16894999.png" alt="flipkart"/>
                            </div>
                            <div>
                                25 Lacs+ units sold on Flipkart <br/> 3 Lacs+ 5 ⭐ reviews
                            </div>
                        </div>
                        <div className="extraDetailsPersonalisationDiv1">
                            <h3>Make Your Product Personalised </h3>
                            <p>Get A Customized Engraving And Make It Unmistakably Yours.</p>
                        </div>
                        <div>
                            <h3>Active Offers</h3>
                        </div>
                        <div className="activeOffersDiv1">
                            <div>
                                <p>More than 2 items</p>
                                <hr/>
                                <h6>Get 5% Off</h6>
                                <h5>₹ {product?.price-50} <span>/item</span></h5>
                                <button>MOST POPULAR</button>
                            </div>
                            <div>
                                <p>More than 5 items</p>
                                <hr/>
                                <h6>Get 7% Off</h6>
                                <h5>₹ {product?.price-100} <span>/item</span></h5>
                                <button>BEST VALUE</button>
                            </div>
                            <div>
                                <p>Corporate Deal</p>
                                <hr/>
                                <h6>Click To <br/> Enquire</h6>
                                <br/>
                                <button>BULK ORDER</button>
                            </div>
                        </div>
                        <div className="rewardsTCDiv12">
                            <h3>Rewards and Payment Offers</h3>
                            <h3>+</h3>
                        </div>
                        <div className="rewardsTCDiv1">
                            <div>
                                <img width="80" height="60" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_Rewards_logo.png?v=1694079279" alt="img"/>
                            </div>
                            <div>
                                <h4>Earn upto 44 boAt reward points on this product</h4>
                                <p>T &amp; C Apply* </p>
                            </div>
                        </div>
                        <div className="addToCartDiv1">
                            <p>Personalise your product</p>
                            <button>
                                <img width="30" height="30" src="https://cdn-icons-png.flaticon.com/128/3081/3081559.png" alt="cart"/>
                                <span onClick={handleAddToCartItem}>Add To Cart</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
})
