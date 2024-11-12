import {createStore,combineReducers,applyMiddleware} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from 'redux-thunk'

import { getProductsReducer,getProductDetailReducer } from './reducers/productReducer.js';
import { cartReducer } from './reducers/cartReducer.js';


const reducer=combineReducers({
    ProductsData:getProductsReducer,
    getDetail:getProductDetailReducer,
    cart:cartReducer

})

const middleware=[thunk]

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))



)
     


export default store;



