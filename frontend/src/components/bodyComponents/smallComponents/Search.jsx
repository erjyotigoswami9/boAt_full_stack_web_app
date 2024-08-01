import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import '../../../styles/style.css'
import { ProductDetails } from '../productListingSmallComponents/ProductDetails';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
import { BACKEND_URL } from '../../../store/actionType';

export const Search = () => {
    let [searchWord, setSearchWord] = useState("") ;
    
    let {productObj, setProductObj} = useContext(AuthContext) ;
    let navigate = useNavigate() ;
    let [searchedData, setSearchedData] = useState([]) ;

    function handleGoToSingleProduct(product){
      setProductObj({...product}) ;
      navigate('/product')
    }

    async function handleClickSearch(e){
        e.preventDefault() ;
        if(searchWord!=""){
            console.log(searchWord) ;
            try {

                let searching_url = `${BACKEND_URL}/products/full` ;
                let res = await axios.get(searching_url) ;
                console.log(res) ;

                if(res.data.data){

                    let dataNew = [...res.data.data] ;
                    let dataNew2 = dataNew?.filter(ele=>(ele.name).toLowerCase().includes((searchWord).toLowerCase())) ;
                    console.log(dataNew2) ;
                    if(dataNew2.length>0){
                        setSearchedData(dataNew2) ;
                    } else 
                    setSearchedData([...res.data.data]) ;

                    setSearchWord("") ;
                }
            } catch (error) {
              console.log(error) ;   
            }
        }
    }
  return (
    <>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"50px"}}>
     
      <div style={{display:"flex", flexWrap:"wrap", flexDirection:"column"}}>
      <div style={{fontFamily:"monospace", color:"blue", fontSize:"17px", cursor:"pointer"}}>
         <p onClick={()=>navigate('/')}>Home</p>
         <br />
      </div>

          <form>
              <input type="text" value={searchWord} onChange={(e)=>setSearchWord(e.target.value)} placeholder='search' style={{width:"150px", padding:"10px", fontFamily:"monospace", color:"gray", fontSize:"16px"}} />
              <button onClick={handleClickSearch} style={{backgroundColor:"white", color:"green", border:"1px solid whitesmoke", padding:"10px", margin:"10px"}}>Search 🔍</button>
          </form>
      </div>
    </div>
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
    </>
  )
}
