import React, { memo, useEffect, useState } from 'react'
import '../../../styles/style.css'
import { useNavigate } from 'react-router';

let timerIdHrs , timerIdSeconds, timerIdMins ;

export const TimerOfferHomeDiv = memo(() => {
  let [hrs, setHrs] = useState(2) ;
  let [seconds, setSeconds] = useState(59) ;
  let [mins, setMins] = useState(59) ;
  let navigate = useNavigate() ;

  useEffect(()=>{
    timerIdHrs = setInterval(()=>{
      if(hrs==-1) {
        clearInterval(timerIdHrs) ;
      }
    },3600000) ;

    timerIdMins = setInterval(()=>{
      if(mins==0) {
        setMins(59) ;
        setHrs(hrs-1)
      }
      if(hrs==-1){
        clearInterval(timerIdMins) ;
      }
    },60000)

    timerIdSeconds = setInterval(()=>{
      setSeconds(seconds-1) ;
      if(seconds==0) {
        setSeconds(59) ;
        setMins(mins-1) ;
      }
      if(hrs==-1){
        clearInterval(timerIdSeconds) ;
      }
    },1000)

    return ()=>{
      clearInterval(timerIdHrs) ;
      clearInterval(timerIdMins) ;
      clearInterval(timerIdSeconds) ;
    }

  },[seconds])

  return (
    <>
    <div className="offerHeadingDetailsDiv1" onClick={()=>navigate('/products')}>
        <h2>Summer <b>Sa<span>le</span></b></h2>
        <div className="timerOfferDiv1">
            
                <img src="https://www.boat-lifestyle.com/cdn/shop/files/Strip_Web_2_1600x.jpg?v=1717740241" alt="img" />
            
        </div>
        <div className="timerDisplayDiv2">
            <h2>
                Sale Ending in &nbsp; <span> {hrs} </span>&nbsp; Hours : &nbsp;<span> {mins} </span>&nbsp; Minutes : &nbsp;<span> {seconds} </span>&nbsp; Sec
            </h2>
        </div>
    </div>
    </>
  )
})
