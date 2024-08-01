import React, { useEffect, useState } from 'react'
import '../../styles/style.css'
import { useNavigate } from 'react-router';

export const MediaResponsiveNavbar = () => {
   let [showCategoryResponsive, setShowCategoryResponsive] = useState(false) ;
   let [showMoreDivResponsive, setShowMoreDivResponsive] = useState(false) ;

   let navigate = useNavigate() ;

   useEffect(()=>{
      setShowCategoryResponsive(false) ;
      setShowMoreDivResponsive(false) ;
   },[])
  return (
    <>
       {/* <!-- media responsive navbar section divs --> */}
    <div className="mediaResponsiveDiv2" onClick={()=>{setShowCategoryResponsive(!showCategoryResponsive); setShowMoreDivResponsive(false)}}><h2>Categories</h2><h2>+</h2></div>    

    { showCategoryResponsive && 
    <div className="mediaResponsiveDiv1">
    <div onClick={()=>navigate('/searching/True Wireless Earbuds')}>
        <div>
          <img src="https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062" alt="img"/>
        </div>
        <div>
          <p>True Wireless Earbuds</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Personalised Products')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/Nirvana-ION-Black-_-1_-1.1_100x.png?v=1699269477" alt="img"/>
        </div>
        <div>
            <p>Personalised Products</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Neckbands')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287" alt="img"/>
        </div>
        <div>
            <p>Neckbands</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Smart Watches')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668" alt="img"/>
        </div>
        <div>
           <p>Smart Watches</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Wireless Headphones')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051" alt="img"/>
        </div>
        <div>
           <p>Wireless Headphones</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Wireless Speakers')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751" alt="img"/>
        </div>
        <div>
           <p>Wireless Speakers</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Wired Headphones')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/wiredheadphones_100x.webp?v=1705400196" alt="img"/>
        </div>
        <div>
           <p>Wired Headphones</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Wired Earphones')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/Wiredearphones_100x.webp?v=1705399424" alt="img"/>
        </div>
        <div>
           <p>Wired Earphones</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Soundbars')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849" alt="img"/>
        </div>
        <div>
           <p>Soundbars</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Gaming Headphones')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/Immortal_category_Image_100x.png?v=1684827903" alt="img"/>
        </div>
        <div>
           <p>Gaming Headphones</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Party Speakers')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/sound_bar_4f111a6a-2482-41c8-87f2-db7e0ee19e69_1_100x.webp?v=1684827961" alt="img"/>
        </div>
        <div>
           <p>Party Speakers</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Misfit Trimmers')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/MISFIT-shop_100x.png?v=1684827994" alt="img"/>
        </div>
        <div>
           <p>Misfit Trimmers</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Chargers')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/Charger_100x.png?v=1684828017" alt="img"/>
        </div>
        <div>
           <p>Chargers</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Power Banks')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/powerbank_100x.png?v=1684828045" alt="img"/>
        </div>
        <div>
           <p>Power Banks</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Cables')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/cables_cd468fe0-9b41-4eef-b686-0785c6478534_100x.png?v=1704789523" alt="img"/>
        </div>
        <div>
           <p>Cables</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Car Accessories')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/Car-accessories_07e4e533-2b59-4597-aa3f-110552541f0f_100x.png?v=1684828103" alt="img"/>
        </div>
        <div>
           <p>Car Accessories</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Superhero Collection')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/imageedit_1_7038353159_100x.png?v=1684828134" alt="img"/>
        </div>
        <div>
           <p>Superhero Collection</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Trebel for Women')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/New-Category-Banners_with-Trebal_09_100x.png?v=1684828168" alt="img"/>
        </div>
        <div>
           <p>Trebel for Women</p>
        </div>
    </div>
    <div onClick={()=>navigate('/searching/Limited Edition')}>
        <div>
           <img src="https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-limited-edition_100x.png?v=1684828200" alt="img"/>
        </div>
        <div>
           <p>Limited Edition</p>
        </div>
    </div>
    
    </div>
}

    <div className="boatPersonalisationResponsiveDiv1" onClick={()=>navigate('/products')}>
        <h2>boAt Personalisation</h2><h2>&gt;</h2>
    </div>
    <div className="boatPersonalisationResponsiveDiv1" onClick={()=>navigate('/products')}>
        <h2>Gift with boAt</h2><h2>&gt;</h2>
    </div>
    <div className="boatPersonalisationResponsiveDiv1" onClick={()=>navigate('/products')}>
        <h2>Corporate Orders</h2><h2>&gt;</h2>
    </div>
   
    <div className="moreResponsiveOptionsDiv1" onClick={()=>{setShowMoreDivResponsive(!showMoreDivResponsive); setShowCategoryResponsive(false)}}>
        <h2>More</h2><h2>+</h2>
    </div>

    {showMoreDivResponsive && 
    <div className="moreResponsiveOptionsDiv2" onClick={()=>navigate('/products')}>
        <div>Daily Deals</div>
        <div>Blogs</div>
        <div>Refer &amp; Earn</div>
        <div>Careers</div>
        <div>Social Responsibilty</div>
        <div>Store Locator</div>
        <div>boAt Community</div>
    </div>
   }
   <div className="boatPersonalisationResponsiveDiv1">
    <h2>Track your Orders</h2><h2>&gt;</h2>
   </div>


    </>
  )
}
