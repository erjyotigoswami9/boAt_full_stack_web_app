import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthContext'
import '../../styles/style.css'
import { ListOfQualitiesDiv2SingleProductPage } from './singleProductPageSmallComponents/ListOfQualitiesDiv2SingleProductPage'
import { ImageBigDiv1 } from './singleProductPageSmallComponents/ImageBigDiv1'
import { ProductSpecificationDiv1 } from './singleProductPageSmallComponents/ProductSpecificationDiv1'
import { DownloadUserManual } from './singleProductPageSmallComponents/DownloadUserManual'
import { VerifiedReviews } from './singleProductPageSmallComponents/VerifiedReviews'
import { ReviewForm } from './singleProductPageSmallComponents/ReviewForm'
import { FAQ } from './singleProductPageSmallComponents/FAQ'
import { ExtraDetails } from './singleProductPageSmallComponents/ExtraDetails'
import { ProductNavbar2Details } from './singleProductPageSmallComponents/ProductNavbar2Details'
import { MainProductDetails } from './singleProductPageSmallComponents/MainProductDetails'
import { Navbar2 } from '../header/Navbar2'
import { MediaResponsiveNavbar } from '../header/MediaResponsiveNavbar'
import { Footer } from '../footer/Footer'

export const SingleProductPage = () => {
  let {setShowMediaNavbar1, showMediaNavbar1} = useContext(AuthContext) ;
  let {productObj, setProductObj} = useContext(AuthContext) ;

  return (
   <>
   
   <Navbar2 />

      { showMediaNavbar1 && <MediaResponsiveNavbar /> }

      <br />
   <div className="parentProductDiv1">
       
        {/* details product navbar 2 category and name of product */}
    
        <ProductNavbar2Details product={productObj} />
          
        {/* main details of product where product passed as an argument */}

        <MainProductDetails product={productObj} />


    
    
    {/* <!-- home page div2 of offers --> */}

    <ListOfQualitiesDiv2SingleProductPage />

    {/* image big show 1 div */}

    <ImageBigDiv1 imgSrc={productObj?.imgSrc[0]} />

    {/* product specifications Div 1  */}

    <ProductSpecificationDiv1 />

    {/* download user manual div1  */}

    <DownloadUserManual />

   {/* verification / reviews div's */}

    <div className="verifiedReviewsDiv">
            <h2>Verified Reviews : </h2>

            {/* verified reviews div1 */}

            <VerifiedReviews />

            {/* form review div 1 */}

            <ReviewForm product_id={productObj?._id} />

    </div>

    {/* FAQ div */}

    <FAQ />

    {/* extra product details p */}

    <ExtraDetails />
          
    </div>

    
    <Footer />
   </>
  )
}
