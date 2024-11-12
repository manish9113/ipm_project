import axios from 'axios'
import * as actionTypes from '../constants/cartConstants.js'

const URL="http://localhost:8000"
export const addtoCart=(id,quantity)=>async(dispatch)=>{
   
    try{
          
     const {data}=await axios.get(`${URL}/products/${id}`)
     dispatch({type:actionTypes.ADD_TO_CART,payload:{...data,quantity}})


    }catch(error){
       
     dispatch({type:actionTypes.ADD_TO_CART_ERROR,payload:error.message})



    }

}


export const removefromCart=(id)=>(dispatch)=>{
     dispatch({type:actionTypes.REMOVE_FROM_CART,payload:id})
}

export const setCartItems = (items) => (dispatch) => {
    dispatch({ type: actionTypes.SET_CART_ITEMS, payload: items });
  };