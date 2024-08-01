import React, { useContext, useEffect, useState } from 'react'
import '../../../styles/style.css'
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { Footer } from '../../footer/Footer';
import { Navbar2 } from '../../header/Navbar2';
import { MediaResponsiveNavbar } from '../../header/MediaResponsiveNavbar';
import { BACKEND_URL } from '../../../store/actionType';

export const Category = () => {
    
    let {setShowMediaNavbar1, showMediaNavbar1} = useContext(AuthContext) ;
    let {productObj, setProductObj} = useContext(AuthContext) ;
    let navigate = useNavigate() ;
    let [searchedData, setSearchedData] = useState([]) ;

    function handleGoToSingleProduct(product){
      setProductObj({...product}) ;
      navigate('/product')
    }

    let {category} = useParams() ;
    console.log("category is ",category) ;
    
    async function handleClickSearch(e){
        console.log("func calling") ;
        console.log("final category is",category) ;
        
            try {
                
                let searching_url = `${BACKEND_URL}/products/category/${category}` ;
                console.log("searching url is", searching_url)
                let res = await axios.get(searching_url) ;
                console.log(res) ;

                if(res.data.data){

                    let dataNew = [...res.data.data] ;
                    console.log(dataNew) ;
                    if(dataNew.length>0){
                        setSearchedData(dataNew) ;
                    } else 
                    setSearchedData([]) ;

                }
            } catch (error) {
              console.log(error) ;   
            
        }
    }

    useEffect(()=>{
        handleClickSearch() ;
    },[category])
    

  return (
    <>
    <Navbar2 />

    { showMediaNavbar1 && <MediaResponsiveNavbar /> }

    <br /><br />
    {/* <button onClick={handleClickSearch}>show data</button> */}
    {searchedData.length==0 && <h3 style={{fontSize:"14px", fontFamily:"monospace", textAlign:"center", letterSpacing:"1px", color:"purple", marginTop:"40px"}}>We are working on data🏬, <br />We'll update you soon by adding more data🫡 <br />Thank you for your patience🙌</h3> }
     <div className='productListingDiv1'>
        <div className='productListDiv2'>
            {
                searchedData && searchedData?.length>0 && searchedData.map(product=>{
                    return(

                        <div onClick={()=>handleGoToSingleProduct(product)} key={product._id}>
                        <div>
                          <img
                            src={product.imgSrc}
                            alt="img"
                          />
                          <div>Noise cancellation</div>
                        </div>
                        <div>
                          <div className="ratingsDiv2ProductLists">
                            <img
                              width="15"
                              height="15"
                              src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                              alt="stars"
                            />
                            4.9 <span> | </span> 34
                            <img
                              width="15"
                              height="15"
                              src="https://cdn-icons-png.flaticon.com/128/3472/3472620.png"
                              alt="tick"
                            />
                          </div>
                          <h3>{product.name}</h3>
                          <p className="pricesStrikePricesoffer2">
                            ₹{product.price} <del> ₹{product.strikeOffPrice} </del> <span> {product.offerRate}% off</span>
                          </p>
                          <p>
                            <span>120 Hours Playback</span>
                            <span>BEAST™ Mode</span>
                            <span>ENx™ Technology</span>
                          </p>
                          
                        </div>
                      </div>
                    )
                })
            }
        </div>
    </div>

    <br /><br /><br />
    <Footer />
    </>
  )
}
