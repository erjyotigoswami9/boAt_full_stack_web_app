import React, { createContext, useState } from 'react'

export const AuthContext = createContext() ;

function AuthProvider({children}){

    let [token, setToken] = useState({accessToken:"", refreshToken:""}) ;

    let [showMediaNavbar1, setShowMediaNavbar1] = useState(false) ;
    let [showLoginDiv, setShowLoginDiv] = useState(false) ;
    let [showSignupDiv, setShowSignupDiv] = useState(false) ;
    let [showLogoutDiv, setShowLogoutDiv] = useState(false) ;
    let [isLogin, setIsLogin] = useState(false) ;
    let [showCart, setShowCart] = useState(false) ;
    let [showWriteReviewBox, setShowWriteReviewBox] = useState(false) ;
    let [productObj, setProductObj] = useState({
        "_id": "66a4042911779d5e9fde051e",
        "name": "Airdopes 161",
        "price": 1049,
        "strikeOffPrice": 2490,
        "description": "Wireless Earbuds with Massive Playback of upto 40 Hours, IPX5 Water & Sweat Resistance, IWP Technology, Type C Interface",
        "offerRate": 58,
        "imgSrc": [
            "https://www.boat-lifestyle.com/cdn/shop/files/Black4_600x.jpg?v=1718273342",
            "https://www.boat-lifestyle.com/cdn/shop/products/main_black_fa1c6ec3-93b7-443e-ae82-d5eeb34258f8_72x.png?v=1641206192",
            "https://www.boat-lifestyle.com/cdn/shop/files/Black4_72x.jpg?v=1718273342",
            "https://www.boat-lifestyle.com/cdn/shop/files/Black5_72x.jpg?v=1718273342",
            "https://www.boat-lifestyle.com/cdn/shop/files/Black2_72x.jpg?v=1718273342"
        ],
        "category": "Wireless Earbuds",
        "oneLargeImageSrc": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Product_Highlights_WEB_6_846013ed-9a0d-484c-8a8f-854ab778e1db.jpg?v=1708600318",
        "userId": "66a401b0eba5fd3e285afec3",
        "username": "admin1"
    }) ;

    return (
        <AuthContext.Provider value={{ token,setToken ,setShowMediaNavbar1, showMediaNavbar1, showLoginDiv, setShowLoginDiv, showCart, setShowCart, productObj, setProductObj, showWriteReviewBox, setShowWriteReviewBox, showSignupDiv, setShowSignupDiv, isLogin, setIsLogin, showLogoutDiv, setShowLogoutDiv}}  >{children}</AuthContext.Provider>
    )
}

export {AuthProvider}
