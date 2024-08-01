import React, { memo } from 'react'
import '../../../styles/style.css'

export const ListOfQualitiesDiv2SingleProductPage = memo(() => {
  return (
    <>
    <div className="listOfQualities1Div2">
        <div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123" alt="img"/>
            <p><b>1 year</b> Warranty</p>
        </div>
        <div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123" alt="img"/>
            <p><b>7 day</b> Replacement</p>
        </div>
        <div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123" alt="img"/>
            <p><b>Free Express</b> Delivery <sup>*</sup></p>
        </div>
        <div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123" alt="img"/>
            <p><b>GST</b> Billing</p>
        </div>
    </div>
    </>
  )
}
)