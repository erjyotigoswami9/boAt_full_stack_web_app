import React, { memo, useContext, useEffect, useState } from 'react'
import '../../../styles/style.css'
import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux'
import { BACKEND_URL, getReviewFormData } from '../../../store/actionType'

export const ReviewForm = memo(({product_id}) => {

    let [reviewData, setReviewData] = useState([]) ;
    let [pageNo, setPageNo] = useState(1) ;
    let { showWriteReviewBox, setShowWriteReviewBox, token, isLogin } =useContext(AuthContext) ;

    let dispatch = useDispatch() ;
    let reviewListData = useSelector(state=>state.reviewReducer) ;

    let [ showStars, setShowStars] = useState(0) ;
    let [reviewFormDataSend, setReviewFormDataSend] = useState({userName : "", userEmail : "", reviewRating : "", reviewTitle: "", reviewBox:"", productId : product_id})

    async function getReviewsData(){
      
        dispatch(getReviewFormData({product_id, pageNo})) ;
    }

    useEffect(()=>{
        setShowWriteReviewBox(false) ;
    },[])

    useEffect(()=>{
        getReviewsData() ;
    },[pageNo])

    useEffect(()=>{
        setReviewFormDataSend({...reviewFormDataSend, reviewRating: showStars}) ;
    },[showStars])

    async function handleReviewFormDataFunc(e){
        e.preventDefault() ;
        if(isLogin){
       if(reviewFormDataSend.userName!="" && reviewFormDataSend.userEmail!="" && reviewFormDataSend.reviewBox!=""&& reviewFormDataSend.reviewRating!="" && reviewFormDataSend.reviewTitle!="" && reviewFormDataSend.productId!="")
        {    console.log(reviewFormDataSend) ;
            try {
                let instance = axios.create({
                    headers : {
                        Authorization : `Bearer ${token.accessToken}`
                    }
                })
                let res = await instance.post(`${BACKEND_URL}/reviews/create`,{...reviewFormDataSend}) ;
                console.log(res) ;

                dispatch(getReviewFormData({product_id, pageNo}))
                
                setReviewFormDataSend({userName : "", userEmail : "", reviewRating : "", reviewTitle: "", reviewBox:"", productId : product_id})
             setShowWriteReviewBox(!showWriteReviewBox) ;
            } catch (error) {
                console.log(error) ;
            }
             
        }
       }
       else{
        alert("Pls Login first") ;
        console.log("pls login first") ;
        setReviewFormDataSend({userName : "", userEmail : "", reviewRating : "", reviewTitle: "", reviewBox:"", productId : product_id})
             setShowWriteReviewBox(!showWriteReviewBox) ;
       }

    }
  return (
    <>
    <div className="formReviewDiv1">
            {showWriteReviewBox && 
                <form>
                    <label>Name</label><br/>
                    <input type="text" name="name" value={reviewFormDataSend.userName} onChange={(e)=>setReviewFormDataSend({...reviewFormDataSend, userName:e.target.value})} placeholder="Enter your name (public)" />
                    <br/><br/>
                    <label>Email</label><br/>
                    <input type="email" name="email" value={reviewFormDataSend.userEmail} onChange={(e)=>setReviewFormDataSend({...reviewFormDataSend, userEmail:e.target.value})} placeholder="Enter your email (private)" />
                    <br/><br/>
                    <label>Rating</label><br/>
                    <div className="shown1">
                                
                                <img width="15" height="15" onClick={()=>{setShowStars(showStars=>1);setReviewFormDataSend({...reviewFormDataSend, reviewRating: showStars}) ; }} className={ showStars>0 ? "" : "opqY" } src={ showStars>0 ? "https://cdn-icons-png.flaticon.com/128/1828/1828884.png" : "https://cdn-icons-png.flaticon.com/128/16/16666.png"} alt="stars"/>
                                <img width="15" height="15" onClick={()=>{setShowStars(showStars=>2);setReviewFormDataSend({...reviewFormDataSend, reviewRating: showStars}) ;}} className={ showStars>1 ? "" : "opqY" } src={ showStars>1 ? "https://cdn-icons-png.flaticon.com/128/1828/1828884.png" : "https://cdn-icons-png.flaticon.com/128/16/16666.png"} alt="stars"/>
                                <img width="15" height="15" onClick={()=>{setShowStars(showStars=>3);setReviewFormDataSend({...reviewFormDataSend, reviewRating: showStars}) ;}} className={ showStars>2 ? "" : "opqY" } src={ showStars>2 ? "https://cdn-icons-png.flaticon.com/128/1828/1828884.png" : "https://cdn-icons-png.flaticon.com/128/16/16666.png"} alt="stars"/>
                                <img width="15" height="15" onClick={()=>{setShowStars(showStars=>4);setReviewFormDataSend({...reviewFormDataSend, reviewRating: showStars}) ;}} className={ showStars>3 ? "" : "opqY" } src={ showStars>3 ? "https://cdn-icons-png.flaticon.com/128/1828/1828884.png" : "https://cdn-icons-png.flaticon.com/128/16/16666.png"} alt="stars"/>
                                <img width="15" height="15" onClick={()=>{setShowStars(showStars=>5);setReviewFormDataSend({...reviewFormDataSend, reviewRating: showStars}) ;}} className={ showStars>4 ? "" : "opqY" } src={ showStars>4 ? "https://cdn-icons-png.flaticon.com/128/1828/1828884.png" : "https://cdn-icons-png.flaticon.com/128/16/16666.png"} alt="stars"/>
                    </div>
                    <div className="notShown1">
                        <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                        <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                        <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                        <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                        <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                    </div>
                    <br/><br/>
                    <label>Review Title</label><br/>
                    <input type="text" name="title" value={reviewFormDataSend.reviewTitle} onChange={(e)=>setReviewFormDataSend({...reviewFormDataSend, reviewTitle:e.target.value})} placeholder="Give your review a title" />
                    <br/><br/>
                    <label>Review</label><br/>
                    <input type="text" name="review" value={reviewFormDataSend.reviewBox} onChange={(e)=>setReviewFormDataSend({...reviewFormDataSend, reviewBox:e.target.value})} placeholder="write your comments here" className="reviewInputBox" />
                    <br/><br/>
                    <label>
                        How we use your data: We'll only contact you about the review you left, and only if necessary. By submitting your review, 
                        you agree to Judge.me's <u>terms</u>, <u>privacy</u> and <u>content</u> policies.
                    </label>
                        <br/><br/>
                        <button className="submitReviewFormBtn" onClick={handleReviewFormDataFunc}>Submit Review</button>
                </form>
               }
                <br/><br/>

                <div className="showReviewDiv2">
                   
                   { reviewListData.isLoading && !reviewListData.isError && <h3 style={{textAlign:"center"}}>Loading...</h3> }
                     
                   { !reviewListData.isLoading && reviewListData.isError && <h3 style={{textAlign:"center", color:"red"}}>Error occurred while fetching reviews ! maybe backend server is down !</h3> }
                    

                   { !reviewListData.isLoading && !reviewListData.isError && reviewListData.data && reviewListData.data?.length>0 && reviewListData.data?.map(review=>{
                    return (
                       <div key={review._id}>
                          <h4>{review?.userName}</h4>
                          <button>Verified</button>
                          <p>{review?.dateOfWriting}</p>
                          <div className="starsDiv2">
                            <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                            <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                            <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                            <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                            <img width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"/>
                          </div>
                          <p>{review?.reviewBox}</p>
                       </div>
                    )
                   })}

                   {reviewListData.data?.length==0 && <p style={{textAlign:"center", width:"fit-content", margin:"auto", fontWeight:"500", color:"gray"}}>No more data found !</p>}

                    
                    
                </div>

                <div className="btnsPagesDiv1">
                    <button onClick={()=>setPageNo(1)}>1</button>
                    <button onClick={()=>setPageNo(2)}>2</button>
                    <button onClick={()=>setPageNo(3)}>3</button>
                    <button onClick={()=>setPageNo(pageNo=>pageNo+1)}>&gt;</button>
                </div>

            </div>
    </>
  )
}
)