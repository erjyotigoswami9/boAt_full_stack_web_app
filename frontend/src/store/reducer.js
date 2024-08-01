import { LOADING, ERROR, INITIALIZE, PHTL, PLTH,GETPRICE, UPDATE, aTz, zTa } from './actionType'

export const productReducer = (state={isError:false, isLoading: false , data : [] },action)=>{
    switch(action.type){
        case INITIALIZE : 
                        //   console.log("productReducer initialise data")
                          return { isLoading : false, isError : false , data : [...action.payload] } 
        case LOADING : return {...state, isLoading : true, isError : false} 
        case ERROR : return {...state, isLoading: false, isError : true}
        case PLTH : 
                      console.log("price low to high reducer")
                      let ar1 = [...action.payload] 
                       ar1 = ar1.sort((a,b)=>Number(a.price)-Number(b.price))
                       console.log(ar1) ;
                       return {data : ar1, isLoading : false, isError : false} 
        
        case PHTL : 
                       console.log("price high to low reducer")
                       let ar2 = [...action.payload] 
                       ar2 = ar2.sort((a,b)=>Number(b.price)-Number(a.price)) 
                       console.log(ar2) ;
                       return {data : ar2, isLoading : false , isError : false}

        case aTz :  
                       let arA1 = [...action.payload] 
                       arA1.sort((a, b) => {
                        if ((a.name).toLowerCase() < (b.name).toLowerCase()) {
                          return -1; // a should come before b
                        } else if ((a.name).toLowerCase() > (b.name).toLowerCase()) {
                          return 1; // b should come before a
                        } else {
                          return 0; // names are equal
                        }
                      });
                       return {isLoading : false , isError : false, data : [...arA1]}
        
        case zTa :
                       let arA2 = [...action.payload] 
                       arA2.sort((a, b) => {
                        if ((a.name).toLowerCase() < (b.name).toLowerCase()) {
                          return 1; // a should come before b
                        } else if ((a.name).toLowerCase() > (b.name).toLowerCase()) {
                          return -1; // b should come before a
                        } else {
                          return 0; // names are equal
                        }
                      });
                       return {isLoading : false , isError : false, data : [...arA2]}

        default : return state 
    }
}

export const cartReducer = (state={isLoading : false , isError: false, data : []},action)=>{
    switch(action.type){
        case INITIALIZE : return { isLoading : false , isError: false , data: [...action.payload]}
        case LOADING : return {...state, isLoading: true, isError : false}
        case ERROR : return {...state , isLoading : false, isError : true}
        case UPDATE : return { isLoading : false, isError : false, data : [...action.payload] }
        default : return state 
    }
}

export const cartPrice = (state={price:0},action)=>{
    switch(action.type){
        case GETPRICE : 

                            let ar3 = [...action.payload] 
                            if(ar3 && ar3.length>0){
                                let sumTotal = 0
                                for(let i=0;i<ar3.length;i++){
                                    sumTotal+=Number(ar3[i].productPrice)*Number(ar3[i].quantity) 
                                }
                                return {price : sumTotal}
                            }
                            else {
                                return {price : 0}
                            }

        default : return state
    }
}

export const reviewReducer = (state={isLoading : false, isError : false , data : []}, action)=>{
  switch(action.type){
    case INITIALIZE : return {...state, isLoading : false, isError : false, data : [...action.payload]}
    case LOADING : return {...state, isLoading: true, isError : false}
    case ERROR : return {...state, isLoading: false, isError : true}
    default : return state
  }
}