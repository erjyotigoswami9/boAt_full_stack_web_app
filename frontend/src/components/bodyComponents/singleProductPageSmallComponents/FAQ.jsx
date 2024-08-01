import React, { memo, useEffect, useState } from 'react'
import '../../../styles/style.css'

export const FAQ = memo(() => {
  
  let [showLess, setShowLess] = useState(true) ;

  useEffect(()=>{
    setShowLess(true)
  },[])

  return (
    <>
    <div className="faqDiv1">
            <h1>FAQs</h1>
            { !showLess &&   <div>
              <div>
                <p className="p1Faq1"><span>Q. How can we pause and play tracks?</span><span>+</span></p>
                <p className="p2Faq1">Airdopes 161 comes with a host of intuitive features that allow one to seamlessly control music. 
                    Please refer to the instruction manual to learn about the different ways one can take advantage of its features.</p>
              </div>
              <div>
                <p className="p1Faq2"><span>Q. Can we accept calls on boAt Airdopes 161?</span><span>+</span></p>
                <p className="p2Faq2">Yes, one can easily accept and reject calls on Airdopes 161. It comes with Quick Response Touch Controls that 
                    allows you to easily accept and reject calls.</p>
              </div>
              <div>
                <p className="p1Faq3"><span>Q. Can I use any adapter to charge my device?</span><span>+</span></p>
                <p className="p2Faq3">Yes, you can use any adapter to charge your Airdopes 161 charging case.</p>
              </div>
              <div>
                <p className="p1Faq4"><span>Q. How long does boAt Airdopes 161 last on a single charge?</span><span>+</span></p>
                <p className="p2Faq4">Airdopes 161 wireless earbuds offer upto 40 Hours of backup.</p>
              </div>
              <div>
                <p className="p1Faq5"><span>Q. Is there a warranty for the product? How do I claim warranty?</span><span>+</span></p>
                <p className="p2Faq5">Yes, all of our Wireless Earphones come with a 1 year warranty. To register your device, visit https://support.boat-lifestyle.com/.</p>
              </div>
            </div>
           }
            <button onClick={()=>setShowLess(!showLess)}>Show {showLess ? "More" : "less"} </button>
        </div>

    </>
  )
}
)