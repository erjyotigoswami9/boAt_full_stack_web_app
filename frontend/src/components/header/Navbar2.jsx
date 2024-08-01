import React, { useContext, useEffect, useState } from 'react'
import '../../styles/style.css'
import {DropDown2More} from './navbarsDropDowns/DropDown2More'
import {DropDown1} from './navbarsDropDowns/DropDown1'
import { AuthContext } from '../../context/AuthContext'
import {Cart} from '../bodyComponents/Cart'
import { Login } from '../bodyComponents/Login'
import { useNavigate } from 'react-router'


export const Navbar2 = () => {
   let [showCategory, setShowCategory] = useState(false) ;
   let [moreOptionsDisplay, setMoreOptionsDisplay] = useState(false) ;
   let {setShowMediaNavbar1, showMediaNavbar1} = useContext(AuthContext) ;
   let { showLoginDiv, setShowLoginDiv } = useContext(AuthContext) ;
   let {showCart, setShowCart} = useContext(AuthContext) ;
   let { showSignupDiv, setShowSignupDiv, isLogin, setIsLogin, showLogoutDiv, setShowLogoutDiv } =useContext(AuthContext) ;
   let navigate = useNavigate() ;

   useEffect(()=>{
    setShowCategory(false);
    setMoreOptionsDisplay(false) ;
    setShowMediaNavbar1(false) ;
    setShowCart(false) ;
    setShowLoginDiv(false) ;
   },[])
 
  return (
    <>
    
    {showCart && <Cart/>}
    {showLoginDiv && <Login />}
    <div className="navDiv1" onClick={()=>navigate('/products')}>
        <b>Rockerz 255 Z Plus</b> is here! Get <b>50 HRS </b> of boAt Signature Sound at <b>₹1299 .</b> Shop now!
    </div>
    <div className="navDiv2">
        <div className="showNavHrs">
            <div onClick={()=>{setShowMediaNavbar1(!showMediaNavbar1); setShowCart(false); setShowLoginDiv(false)}}>
            <button className="btnHrs2">
                <hr />
                <hr />
                <hr />
            </button>
            </div>
            <div>
              <img src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434" alt="boat-logo" onClick={()=>navigate('/')}/>
            </div>
        </div>
        <div className="f1navDiv2">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434" alt="boat-logo" onClick={()=>navigate('/')}/>
        </div>
        <div className="categoryDiv2">
            <div className="categories1" onClick={()=>{setShowCategory(!showCategory); setMoreOptionsDisplay(false); setShowCart(false); setShowLoginDiv(false)}}>
                <div>Categories</div>
                 <div className="see1">^</div>
            </div>
            <div onClick={()=>navigate('/products')}>boAt Personalisation</div>
            <div onClick={()=>navigate('/products')}>Gift With boAt</div>
            <div onClick={()=>navigate('/products')}>Corporate Orders</div>
            <div>
                <div className="categories1" onClick={()=>{setMoreOptionsDisplay(!moreOptionsDisplay); setShowCategory(false); setShowCart(false); setShowLoginDiv(false)}}>
                    <div>More</div>
                     <div className="see1">^</div>
                </div>
            </div>
        </div>
        <div className="searchCartLoginDiv1">
             <div onClick={()=>navigate('/search')}>
                <img width="25" height="25" src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png" alt="search"/>
                <input type="text" placeholder="Search" />
             </div>
             <div>
                <img width="26" height="26" src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png" alt="search" className="showNone2" onClick={()=>navigate('/search')} />
                <img width="22" height="22" src="https://cdn-icons-png.flaticon.com/128/9187/9187475.png" alt="profile" onClick={()=>{setShowCart(false);setShowMediaNavbar1(false);setMoreOptionsDisplay(false); setShowCategory(false); setShowLoginDiv(!showLoginDiv); }}/>
                <img width="22" height="22" src="https://cdn-icons-png.flaticon.com/128/1174/1174408.png" alt="cart" onClick={()=>{setShowCart(!showCart); setShowLoginDiv(false); setShowCategory(false); setShowMediaNavbar1(false);setMoreOptionsDisplay(false)}}/>
             </div>
        </div>
    </div>

    {/* <!-- space div --> */}
     <div className="spaceDiv1"></div>

    {/* <!-- second dropdown menus navbar --> */}

     { showCategory && <DropDown1 />  }

    {/* <!-- more dropdown menus --> */}

    { moreOptionsDisplay && <DropDown2More />}


    </>
  )
}
