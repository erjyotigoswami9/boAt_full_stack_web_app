import React from 'react'
import '../../styles/style.css'
import { FirstImageHomeDiv } from './smallComponents/FirstImageHomeDiv'
import { ListOfQualitiesHomeDiv } from './smallComponents/ListOfQualitiesHomeDiv'
import { TimerOfferHomeDiv } from './smallComponents/TimerOfferHomeDiv'
import { PressHomeDiv } from './smallComponents/PressHomeDiv'

export const FrontPage1 = () => {
  return (
    <>
    {/* <!-- Body of Home Page --> */}
    
    {/* first image slider at home page */}

     <FirstImageHomeDiv />

    {/* <!-- home page div2 of offers --> */}

     <ListOfQualitiesHomeDiv />    

    {/* <!-- timer offer div1 --> */}
    
    <TimerOfferHomeDiv />

    {/* <!-- press div1 --> */}

    <PressHomeDiv />

    </>
  )
}
