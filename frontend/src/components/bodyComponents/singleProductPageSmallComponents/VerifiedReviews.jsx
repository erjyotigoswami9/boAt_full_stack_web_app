import React, { memo, useContext } from 'react'
import '../../../styles/style.css'
import { AuthContext } from '../../../context/AuthContext'

export const VerifiedReviews = memo(() => {
    let {showWriteReviewBox, setShowWriteReviewBox} = useContext(AuthContext) ;
  return (
    <>
    <div className="writeReviewsDiv1">
                <div>
                    <div>
                        <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                        <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                        <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                        <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                        <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                    </div>
                    <p>Based on <span> 31 </span> reviews</p>
                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                            </div>
                            <p>(31)</p>
                        </div>
                        <div>
                            <div>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" className="opqY" src="https://cdn-icons-png.flaticon.com/128/16/16666.png" alt="stars"/>
                            </div>
                            <p>(9)</p>
                        </div>
                        <div>
                            <div>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" className="opqY" src="https://cdn-icons-png.flaticon.com/128/16/16666.png" alt="stars"/>
                                <img width="15" height="15" className="opqY" src="https://cdn-icons-png.flaticon.com/128/16/16666.png" alt="stars"/>
                            </div>
                            <p>(0)</p>
                        </div>
                        <div>
                            <div>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" className="opqY" src="https://cdn-icons-png.flaticon.com/128/16/16666.png" alt="stars"/>
                                <img width="15" height="15" className="opqY" src="https://cdn-icons-png.flaticon.com/128/16/16666.png" alt="stars"/>
                                <img width="15" height="15" className="opqY" src="https://cdn-icons-png.flaticon.com/128/16/16666.png" alt="stars"/>
                            </div>
                            <p>(0)</p>
                        </div>
                        <div>
                            <div>
                                <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                                <img width="15" height="15" className="opqY" src="https://cdn-icons-png.flaticon.com/128/16/16666.png" alt="stars"/>
                                <img width="15" height="15" className="opqY" src="https://cdn-icons-png.flaticon.com/128/16/16666.png" alt="stars"/>
                                <img width="15" height="15" className="opqY" src="https://cdn-icons-png.flaticon.com/128/16/16666.png" alt="stars"/>
                                <img width="15" height="15" className="opqY" src="https://cdn-icons-png.flaticon.com/128/16/16666.png" alt="stars"/>
                            </div>
                            <p>(0)</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>setShowWriteReviewBox(!showWriteReviewBox)}> {showWriteReviewBox ? "Cancel Review" : "Write a review"} </button>
                    </div>
                </div>
            </div>

    </>
  )
})
