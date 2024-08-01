import React, { memo, useEffect, useState } from 'react'
import '../../../styles/style.css'
import { useNavigate } from 'react-router'

var arrImgs = [
   "https://www.boat-lifestyle.com/cdn/shop/files/Space-Desktop_1600x.jpg?v=1721301593",
   "https://www.boat-lifestyle.com/cdn/shop/files/SR-WEB_3_1600x.jpg?v=1721791435",
   "https://www.boat-lifestyle.com/cdn/shop/files/MONSOON-SALE-WEB_1_1440x.jpg?v=1721750339",
   "https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_1_1440x.jpg?v=1706770352"
]

let timerIdSlider1 ;

export const FirstImageHomeDiv = memo(() => {
  let [imgNo , setImgNo] = useState(0) ;

  useEffect(()=>{
      timerIdSlider1 = setInterval(() => {
        if((imgNo+1)<arrImgs.length){
           setImgNo(imgNo+1) 
        }else{
          if(imgNo==(arrImgs.length-1)){
            setImgNo(0) ;
          }
        }
      }, 2000);

      return ()=>{
        clearInterval(timerIdSlider1) ;
      }
  },[imgNo])

  let navigate = useNavigate() ;

  function handleNo(no){
    if(no==4){
      setImgNo(0)
    }else
    if(no==-1){
      setImgNo(arrImgs.length-1) ;
    }
    else{
      setImgNo(no)
    }
  }

  return (
    <>
    {/* <!-- first image div home page --> */}

    <div className="firstImageHomePageDiv1">
        <img src={arrImgs[imgNo]} alt="img" onClick={()=>navigate('/products')} />
        <div className="btnsLefAndRightDiv1">
            <button className="leftMoveBtn1" onClick={()=>handleNo(imgNo-1)}>
                &lt;
            </button>
            <button className="rightMoveBtn2" onClick={()=>handleNo(imgNo+1)}>
                &gt;
            </button>
        </div>
    </div>
    </>
  )
}
)