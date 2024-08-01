import React, { useContext, useEffect, useRef, useState } from 'react'
import '../../styles/style.css'
import { ProductDetails } from './productListingSmallComponents/ProductDetails'
import {ProductsNavbar2Simple} from './productListingSmallComponents/ProductsNavbar2Simple'
import { Navbar2 } from '../header/Navbar2'
import { MediaResponsiveNavbar } from '../header/MediaResponsiveNavbar'
import { Footer } from '../footer/Footer'
import { AuthContext } from '../../context/AuthContext'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { fetchProductData } from '../../store/actionType'

export const ProductListingPage = () => {
    let {setShowMediaNavbar1, showMediaNavbar1} = useContext(AuthContext) ;
    let [selectOptionsValue, setSelectOptionValue] = useState('') ;

    let dispatch = useDispatch() ;

    let productsData = useSelector(state=>state.productReducer) ;

    let [pageNo, setPageNo] = useState(1) ;

    // console.log("products data logged",productsData)

    useEffect(()=>{
         dispatch(fetchProductData({pageNo : pageNo , asc : false , desc : false}))
         setSelectOptionValue('') ;
    },[pageNo])


    async function funcFilter(e){
        console.log(e.target.value) ;
        if(e.target.value=="PLTH"){
            dispatch(fetchProductData({pageNo : pageNo , asc : true , desc : false, alphaAsc : false, alphaDesc : false}))
        }
        else if(e.target.value=="PHTL"){
            dispatch(fetchProductData({pageNo : pageNo , asc : false , desc : true, alphaAsc : false, alphaDesc : false}))
        }
        else if(e.target.value=="aTz"){
            dispatch(fetchProductData({pageNo : pageNo , asc : false , desc : false, alphaAsc : true, alphaDesc : false}))
        }else if(e.target.value=="zTa"){
            dispatch(fetchProductData({pageNo : pageNo , asc : false , desc : false, alphaAsc : false, alphaDesc : true}))
        }
        else{
            dispatch(fetchProductData({pageNo : pageNo , asc : false , desc : false, alphaAsc : false, alphaDesc : false}))
        }
        // console.log("p-data",productsData.data) ;
    }

  return (
    <>
    
    <Navbar2 />

      { showMediaNavbar1 && <MediaResponsiveNavbar /> }

     <br />
    <div className="productListingDiv1">

       {/* navbar 2 simple product lists */}
        <ProductsNavbar2Simple />
        
        <div className="sortFeatureFilterDiv1">
            <p>
                <span>Sort by : &nbsp;</span>
                <img width="25" height="25" src="https://cdn-icons-png.flaticon.com/128/7601/7601533.png" alt="img"/>  &nbsp; 
            </p>
            <select value={selectOptionsValue} onChange={(e)=>{funcFilter(e); setSelectOptionValue(e.target.value)}}>
                <option value="">Feature</option>
                <option value="PLTH">Price, Low to High</option>
                <option value="PHTL">Price, High to Low</option>
                <option value="aTz">Alphabetically, A to Z</option>
                <option value="zTa">Alphabetically, Z to A</option>
            </select>
        </div>
        <div className="productListDiv2">
            {
                !productsData.isError && productsData.isLoading && <h3 style={{textAlign:"center", margin:"auto",marginTop:"5%"}}>Loading...</h3>
            }
            {
                !productsData.isLoading && productsData.isError && <h3 style={{textAlign:"center", margin:"auto",marginTop:"5%", color:"red"}}>error occurred while fetching data! maybe backend server is not active</h3>
            }
            {/* called with simple product details */}
            {
                !productsData.isLoading && !productsData.isError && productsData.data && productsData.data?.length>0 && productsData.data?.map(product=>{
                    return (
                         <ProductDetails product={product} key={product._id} />
                    )
                })
            }
            
        </div>
    </div>

    <div className='PageInProductListingH2Div1' style={{display:"flex", width:"fit-content", margin:"auto", textAlign:"center",fontSize:"13px", gap:"20px"}}>
        <h2 onClick={()=>setPageNo(1)}> 1 </h2>
        <h2 onClick={()=>setPageNo(2)}> 2 </h2>
        <h2 onClick={()=>setPageNo(3)}> 3 </h2>
        <h2 onClick={()=>setPageNo(pageNo=>pageNo+1)}> &gt; </h2>
    </div>

    <br /><br />
    <Footer />

    </>
  )
}
