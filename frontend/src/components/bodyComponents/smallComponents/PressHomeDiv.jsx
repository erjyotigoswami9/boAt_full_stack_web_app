import React, { memo } from 'react'
import '../../../styles/style.css'
import { useNavigate } from 'react-router'

export const PressHomeDiv = memo(()=>{
    let navigate = useNavigate() ;
    return (
        <>
        <div className="boatPressDiv1" onClick={()=>navigate('/products')}>
        <p>In the <b>Pre<span>ss</span></b></p>
        <div className="pressDiv2GridBoat">
            <div>
                <h1><span>BW</span> <span>BUSINESSWORLD</span></h1>
            </div>
            <div>
                <h1><span>'</span><span>'</span></h1>
                <p>boAt is the first company from Consumer lifestyle
                    electronics industry to collaborate with the ICEA to
                     bring out the Indigenous IP .  
                </p>
            </div>
        </div>
    </div>
        </>
    )
})