import {useAppDispatch,useAppSelector} from "../redux/hooks";
import {addToCart, removeFromCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


interface propsType {
    id: number;
    img: any;
    category: any;
    title: any;
    price: any;
    
    }

const Products = ({id,img,category,title,price}:propsType) => {

  const [addToCartBt,setAddToCartBtn]=useState(false)
  const product = useAppSelector((state)=>state.cartReducer)

const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const addProductToCart = ()=>{

        const payload = {
            id,
            img,
            title,
            price:parseFloat(price),
            quantity:1
        }
        dispatch(addToCart(payload))
        toast.success("Added to cart")
    }
  return (
    <div
   
    key={id} className="border border-gray-200  flex flex-col justify-around min-h-[300px] max-h-[300px] rounded-2xl hover:shadow-2xl  ">
       <div
        onClick={()=>navigate(`/${id}`)}
       className="text-center p-2 flex justify-center  min-h-[60%]  max-h-[60%]   ">
        <img className="inline-block  rounded-2xl  " src={img} alt={title} />
      </div>

      <div className=" p-2 flex flex-col  rounded-2xl items-center ">
       <p className="text-gray-500 text-[14px] font-medium">{category?.toUpperCase()}</p>
        <h2 className=" text-xs p-2">{title?.slice(0,30)}...</h2>

      

      
    </div>
   {addToCartBt && product.find(item => item.id === id)?
   <div className="flex flex-col md:flex md:flex-row justify-around items-center mb-2 ">
   {/* <h2 className="font-medium text-accent text-x1">${price}</h2> */}
    <div
      className="flex gap-2 items-center rounded-xl bg-gray-700 text-white p-2  cursor-pointer
       hover:bg-accent"
        onClick={()=>{dispatch(removeFromCart(id),toast.success("Removed from cart"));setAddToCartBtn(false)}}
           >
      <AiOutlineShoppingCart className="text-xs" /><p className="text-sm">Remove From Cart</p>
     </div>
 </div> :
 <div className="flex flex-col md:flex md:flex-row justify-around items-center mb-2 ">
     {/* <h2 className="font-medium text-accent text-x1">${price}</h2> */}
      <div
        className="flex gap-2 items-center rounded-xl bg-pink text-white p-2 cursor-pointer
         hover:bg-accent"
          onClick={()=>{addProductToCart();setAddToCartBtn(true)}}
             >
        <AiOutlineShoppingCart className="text-end" /> <p className="text-sm">Add To Cart</p>
       </div>
   </div> 
  }
 </div>
  )
}

export default Products