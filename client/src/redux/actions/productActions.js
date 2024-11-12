import axios from 'axios'

import * as actionTypes from '../constants/productConstants.js'

const URL="http://localhost:8000"

export const getProducts=()=>async(dispatch,getState)=>{
    const { products } = getState().ProductsData;
  
  if (products.length > 0) {
    return; // Exit early if products are already fetched
  }

  try {
    const { data } = await axios.get(`${URL}/products`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
  }
}

export const getProductDetail=(id)=>async(dispatch)=>{
    try{
        dispatch({type:actionTypes.GET_PRODUCTS_DETAIL_REQUEST})
        

        const {data}=await axios.get(`${URL}/products/${id}`)
        
        dispatch({type:actionTypes.GET_PRODUCTS_DETAIL_SUCCESS,payload:{data}})

    }catch(error){
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.response})
    }
}


