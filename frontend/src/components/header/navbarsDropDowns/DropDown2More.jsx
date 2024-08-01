import React, { memo } from 'react'
import '../../../styles/style.css'
import { useNavigate } from 'react-router'

export const DropDown2More = memo(() => {
  let navigate = useNavigate() ;
  return (
    <>
    <div className="moreOptionsDropDown2Div" onClick={()=>navigate('/products')}>
        <div>Daily Deals</div>
        <div>Blogs</div>
        <div>Refer &amp; Earn</div>
        <div>Careers</div>
        <div>Social Responsibilty</div>
        <div>Store Locator</div>
        <div>boAt Community</div>
    </div>
    </>
  )
})
