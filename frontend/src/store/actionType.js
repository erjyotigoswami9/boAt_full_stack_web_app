import axios from "axios"
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

// pls take this url for backend if deployed one taking lots time to load or issue in starting a server

  // VITE_BACKEND_URL=http://localhost:3000
  
  // write this above line in .env file which is created after the src folder (not in src folder)

export const LOADING = "loading"
export const ERROR = "error"
export const INITIALIZE = "initialize"
export const GETPRICE = "cart/getPrice"
export const PLTH = "price/lowToHigh"
export const PHTL = "price/highToLow"
export const UPDATE = "cart/update"
export const aTz = "alphabetically/ascendingOrder"
export const zTa = "alphabetically/descendingOrder"

export const errorType = ()=>{
    return {type : ERROR}
}

export const loadingType = ()=>{
    return {type : LOADING}
}

export const initializeType = (data)=>{
    return {type: INITIALIZE, payload : data}
}

export const priceLowToHighType = (data)=> {
    return {type : PLTH , payload : data}
}

export const priceHighToLowType = (data)=>{
    return {type: PHTL, payload : data}
}

export const updateType = (data)=>{
    return {type: UPDATE , payload : data} 
}

export const getPriceType = (data)=>{
    return {type: GETPRICE , payload : data}
}

export const getAscAlpha = (data)=>{
    return {type: aTz, payload: data}
}

export const getDescAlpha = (data)=>{
    return {type: zTa , payload : data}
}

export const fetchProductData = ({pageNo, asc, desc, alphaAsc, alphaDesc})=> async(dispatch)=>{
    try {
        dispatch(loadingType())
        let res = await axios.get(`${BACKEND_URL}/products/all?pageNo=${pageNo}&limitNo=5`) ;
        // console.log(res.data.data) ;
        if(res?.data?.data.length>0){
            let data1 = [...res.data.data] ;
            if(asc){
                dispatch(priceLowToHighType(data1))
            }else 
            if(desc){
                dispatch(priceHighToLowType(data1)) 
            }if(alphaAsc){
                dispatch(getAscAlpha(data1))
            }
            else if(alphaDesc){
                dispatch(getDescAlpha(data1))
            }
            else 
                { dispatch(initializeType(data1))
                    
                }
        }
        else{
            dispatch(initializeType([]))
        }
    } catch (error) {
        console.log(error)
        dispatch(errorType())
        dispatch(initializeType([]))
    }
}

export const fetCartData = ({instance})=> async(dispatch)=>{
    try {
        dispatch(loadingType()) 
        let cart_url = `${BACKEND_URL}/cart/data` ;
        let res = await instance.get(cart_url) ;
        // console.log(res.data.data) ;
        if(res.data){
            let data2 = [...res.data.data] 
            dispatch(initializeType(data2))
            dispatch(getPriceType(data2))
        }
        else{
            dispatch(initializeType([]))
        }
    } catch (error) {
        console.log(error) ;
        dispatch(errorType()) ;
        dispatch(initializeType([])) ;
    }
}

export const getReviewFormData = ({product_id, pageNo}) => async(dispatch) =>{
    try {
        dispatch(loadingType()) ;
        let res = await axios.get(`${BACKEND_URL}/reviews/all/${product_id}?page=${pageNo}&limit=6`) ;
        // console.log(res.data.data) ;
        if(res.data.data.length>0){
            let data4 = res.data.data ;
            dispatch(initializeType(data4)) ;
        }else{
            dispatch(initializeType([])) ;
        }
    } catch (error) {
        dispatch(errorType()) ;
    }
}