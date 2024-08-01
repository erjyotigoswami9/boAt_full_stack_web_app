import { combineReducers, legacy_createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk' 
import { cartReducer, cartPrice, productReducer, reviewReducer } from './reducer'

export const rootReducer = combineReducers({
    cartPrice ,
    productReducer,
    cartReducer,
    reviewReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk)) ;