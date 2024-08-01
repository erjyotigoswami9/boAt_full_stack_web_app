import React, { memo } from 'react'
import '../../../styles/style.css'
import { useNavigate } from 'react-router'

export const ProductsNavbar2Simple = memo(() => {
  let navigate = useNavigate() ;
  return (
    <>
    <p className="homeSpecialRange1" onClick={()=>navigate('/')}>Home &nbsp; &gt; &nbsp; Special Range — Personalised Products</p>
    <h1>Special Range — Personalised Products</h1>
    </>
  )
}
)