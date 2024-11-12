import HomeCarousel from "./HomeCarousel.jsx";
import ProductType from "./ProductType.jsx";
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import Footer from '../footer/Footer.jsx'

import {getProducts} from "../../redux/actions/productActions.js";
 import  ProductsSlider  from "./ProductsSlider.jsx"
// import {menAccessoriesData} from "../Productdata/Productdata.jsx"



const Home=()=>{

    const dispatch=useDispatch()

   

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    const prod=useSelector(state=>state.ProductsData)
    const ProductsData=prod.products
    
    const title1='HOT Selling Products'
    const title2='Men Accessories'
    const title3='Female Accessories'
    const title4='Electronics'
    const title5='Cheapest Price This Year'



    return(
        <div>
        <HomeCarousel/>
        <ProductType/>
        <ProductsSlider products={ProductsData} title={title1}/>
        <ProductsSlider products={ProductsData} title={title2}/>
        <ProductsSlider products={ProductsData} title={title3}/>
        <ProductsSlider products={ProductsData} title={title4}/>
        <ProductsSlider products={ProductsData} title={title5}/>
        
        <Footer/>
        </div>
    )
}

export default Home;