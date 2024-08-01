import React, { memo } from 'react'
import '../../../styles/style.css'
import { useNavigate } from 'react-router-dom' ;

export const ProductNavbar2Details = memo(({product}) => {
  let navigate=useNavigate() ;
  return (
    <>
     <div className="parasDiv1">
            <p onClick={()=>navigate('/')}>Home </p>
            <p>&nbsp; &gt; &nbsp; </p>
            <p onClick={()=>navigate('/products')}> {product.category} </p>
            <p>&nbsp; &gt; &nbsp; </p>
            <p> {product.name} </p>
        </div>
    </>
  )
}
)