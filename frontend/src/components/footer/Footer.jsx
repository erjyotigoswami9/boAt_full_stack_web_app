import React from 'react'
import '../../styles/style.css'
import {useNavigate} from 'react-router-dom' ;

export const Footer = () => {
    let navigate = useNavigate() ;
  return (
    <>
    
    {/* <!-- footer div1 --> */}
    <div className="footerDiv1" onClick={()=>navigate('/products')}>
       <div>
           <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo.svg" alt="logo"/>
           <h2>Subscribe to our email alerts!</h2>
           <div className="subscribeDiv1">
              <input type="text" placeholder="Enter your email address" />
              <img width="20" height="20" src="https://cdn-icons-png.flaticon.com/128/1549/1549454.png" alt="img"/>
           </div>
       </div>
       <div>
        <h5>Shop</h5>
        <p>True Wireless Earbuds</p>
        <p>Wired Headphones</p>
        <p>Home Audio</p>
        <p>Smart Watches</p>
        <p>Misfit Trimmers</p>
       </div>
       <div>
        <h5 className="h5Disabled">.</h5>
        <p>Wireless Headphones</p>
        <p>Wireless Speakers</p>
        <p>Mobile Accessories</p>
        <p>TRebel</p>
        <p>Refer &amp; Earn</p>
       </div>
       <div>
          <h5>Help</h5>
          <p>Track Your Order</p> 
          <p>Warranty & Support</p> 
          <p>Return Policy</p> 
          <p>Service Centers</p> 
          <p>Bulk Orders</p> 
          <p>FAQs</p> 
          <p>Why Buy Direct</p>
       </div>
       <div>
          <h5>Company</h5> 
          <p>About boAt</p> 
          <p>News</p> 
          <p>Read Our Blog</p> 
          <p>Careers</p> 
          <p>Security</p> 
          <p>Investor Relations</p> 
          <p>Social Responsibility</p> 
          <p>Warranty Policy</p>
       </div>
    </div>

    {/* <!-- footer div2 --> */}
     <div className="footerDiv2">

        <div>
            <div>
                <h3>True Wireless Earbuds</h3>
                <h4>Shop By Features</h4>
                <p>Noise Cancellation Earbuds </p>
                <p>Gaming Earbuds</p>
                <p>Large Playback Earbuds</p>
            </div>
            <div>
                <h4>
                   Shop by Price
                </h4>
                <p>Earbuds Under 1000</p>
                <p>Earbuds Under 2000</p>
                <p>Earbuds Under 3000</p>
                <p>Earbuds Under 4000</p>
                <p>Earbuds Under 5000</p>
                <p>Earbuds Above 5000</p>
            </div>
            <div>
                <h3>Wireless Earphones</h3>
                <h4>
                    Shop by Features
                </h4>
                <p>Noise Cancellation Earphone</p>
                <p>Long Playback Earphone</p>
                <p>Clear Calling Earphone</p>
                <h4>Shop by Price</h4>
                <p>Neckbands Under 1000</p>
                <p>Neckbands Under 2000</p>
                <p>Neckbands Under 3000</p>
            </div>
            <div>
                <h3>Wired Earphones</h3>
                <h4>
                    Shop by Features
                </h4>
                <p>Wired Headphones with Mic</p>
                <p>Wired Headphones with Mic</p>
                <p>Headphones with Mic for PC</p>
                <h4>Shop by Price</h4>
                <p>Wired Headphones Under 1000</p>
                <p>Wired Headphones Under 2000</p>
                <p>Wired Headphones Under 3000</p>
            </div>
            <div>
                <h3>Gaming Headphones</h3>
                <h4>
                    Shop by Features
                </h4>
                <p>Gaming Headphones with Mic</p>
                <p>Low Latency Headphone</p>
                <p>RGB Light Headphones</p>
                <p>Headphone for PC Gaming</p>
            </div>
        </div>
        <div>
            <div>
                <h3>Wireless Speakers</h3>
                <h4>Shop by Features</h4>
                <p>Portable Speakers</p>
                <p>Long Playback Speakers</p>
                <p>Waterproof Bluetooth Speaker</p>
                <p>Party Speaker with RGB Lights</p>
                <p>Speaker with Karaoke Mic</p>
                <h4>Shop by Price</h4>
                <p>Bluetooth Speakers Under 1000</p>
                <p>Bluetooth Speakers Under 2000</p>
                <p>Bluetooth Speakers Under 3000</p>
                <p>Bluetooth Speakers Under 5000</p>
                <p>Bluetooth Speakers Under 8000</p>
            </div>
            <div>
                <h3>Soundbars</h3>
                <h4>Shop by Features</h4>
                <p>Soundbar with Wireless Subwoofer</p>
                <p>Dolby Soundbars</p>
                <p>Soundbar with Wired Subwoofer</p>
                <p>Alexa Enabled Soundbar</p>
                <h4>Shop by Price</h4>
                <p>Soundbars Under 10000</p>
                <p>Soundbars Under 20000</p>
                <p>Soundbars Under 3000</p>
                <p>Soundbars Under 5000</p>
                <p>Soundbars Above 20000</p>
            </div>
            <div>
                <h3>Smart Watches</h3>
                <h4>Shop by Features</h4>
                <p>Bluetooth Calling Smartwatches</p>
                <p>Fitness Tracker Smartwatch</p>
                <p>Big Display Smartwatch</p>
                <p>Amoled Display Smartwatch</p> 
                <p>Sports Tracker Smartwatch</p> 
                <h4>Shop by Identity</h4> 
                <p>Smartwatches For Women/Girls</p>
                <p>Smartwatches For Men/Boys</p> 
                <h4>Shop by Price</h4>
                <p>Smartwatch Under 1000</p> 
                <p>Smartwatch Under 2000</p>
                <p>Smartwatch Under 3000</p> 
                <p>Smartwatch Under 4000</p> 
                <p>Smartwatch Under 5000</p> 
                <p>Smartwatch Above 5000</p>
            </div>
        </div>
        <div>
            <div>
                <h3>Trimmers</h3>
                <h4>Shop by Features</h4>
                <p>Trimmer for Men</p>
                <p>Trimmers with Grooming Kit for Men</p>
                <h4>Shop by Price</h4>
                <p>Trimmer Under 1000</p>
                <p>Trimmer Under 2000</p>
            </div>
            <div>
                <h3>Limited Editions</h3>
                <h4>Shop by Features</h4>
                <p>Limited Editions Headphones</p>
                <p>Limited Editions Smart Watch</p>
                <p>Limited Editions Earphone</p>
                <p>Limited Edition Speakers</p>
            </div>
            <div>
                <h3>Car Accessories</h3>
                <h4>Shop by Features</h4>
                <p>Car Charger</p> 
                <p>Aux Cable for Car</p>
                <h4>Shop by Price</h4> 
                <p>Car Charger Under 500</p>
                <p>Car Charger Above 500</p>
            </div>
            <div>
                <h3>Trebel Range</h3>
                <h4>Shop by Features</h4>
                <p>Smartwatch for Women</p>
                <p>Earbuds for Women</p>
                <p>Neckband for Women</p>  
                <p>Earphone for Women</p> 
                <p>Headphone for Women</p>
            </div>
            <div>
                <h3>Powerbanks</h3>
                <h4>Shop by Features</h4> 
                <p>Power Bank 10000mah</p> 
                <p>Power Bank 20000mah</p> 
                <p>Mobile Power Bank</p> 
                <p>Fast Charging Power Bank</p> 
                <p>Power Bank for iPhone</p> 
                <h4>Shop by Price</h4> 
                <p>Power Bank Under 1000</p> 
                <p>Power Bank Under 1500</p> 
                <p>Power Bank Under 2000</p>
            </div>
        </div>
        <div>
            <div>
                <h3>Chargers</h3>
                <h4>Shop by Features</h4> 
                <p>Wireless Charger</p> 
                <p>Type C Charger</p> 
                <p>Fast Charger</p> 
                <p>USB Charger</p> 
                <p>Micro USB Charger</p> 
                <p>Type C Adapter</p>
                <p>Type C Adapter</p>
            </div>
            <div>
                <h3>Cables</h3> 
                <h4>Shop by Features</h4> 
                <p>Micro USB Cable</p> 
                <p>C Type Cable</p> 
                <p>Lightning Cable</p> 
                <p>USB C to C Cable</p> 
                <p>Smart Watch Charging Cable</p>
            </div>
            <div>
                <h3>Wireless Headphones</h3> 
                <h4>Shop by Features</h4> 
                <p>Noise Cancelling Headphones</p> 
                <p>Wireless Gaming Headphone</p> 
                <p>Long Playback Headphones</p> 
                <h4>Shop by Price</h4> 
                <p>Wireless Headphones Under 1000</p> 
                <p>Wireless Headphones Under 2000</p> 
                <p>Wireless Headphones Under 3000</p> 
                <p>Wireless Headphones Under 4000</p> 
                <p>Wireless Headphones above 5000</p> 
            </div>
            <div>
                <h3>Wired Headphones</h3> 
                <h4>Shop by Features</h4> 
                <p>Wired Headphones with Mic</p> 
                <p>Wired Headphones with Mic</p> 
                <p>Headphones with Mic for PC</p> 
                <h4>Shop by Price</h4> 
                <p>Wired Headphones Under 1000</p> 
                <p>Wired Headphones Under 2000</p> 
                <p>Wired Headphones Under 3000</p>
            </div>
        </div>
        
     </div>
     
    {/* <!-- footer div3 --> */}
    <div className="footerDiv3">
        <div>
           <h4>Let's get social</h4>
           <div>
                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="img"/>
                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/11823/11823292.png" alt="img"/>
                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/739/739244.png" alt="img"/>
                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="img"/>
                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1384/1384030.png" alt="img"/>
           </div>
        </div>
        <p className="privacyPolicyP1">
            Privacy Policy <span><sub>*</sub></span> Terms &amp; Conditions
        </p>
        <p className="privacyPolicyP2">
            
            © 2024 Imagine Marketing Limited. All Rights Reserved.
            <br/>
            For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing,
            <br/>
             Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
        </p>
    </div>

 </>
  )
}
