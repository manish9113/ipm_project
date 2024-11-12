import * as actionTypes from "../constants/productConstants.js"


const initialState = {
    products: [],
    loading: false,
    error: null,
};

export const getProductsReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload,
            }
        case actionTypes.GET_PRODUCTS_FAIL:
            return {...state,
                error:action.payload
            }
            default:
                return state;

    }
}


export const getProductDetailReducer=(state={product:{}},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_DETAIL_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case actionTypes.GET_PRODUCTS_DETAIL_SUCCESS:
            return{
                ...state,
                loading:false,
                product:action.payload
            }
        case actionTypes.GET_PRODUCTS_DETAIL_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }

}