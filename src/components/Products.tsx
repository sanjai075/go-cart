import {useAppDispatch,useAppSelector} from "../redux/hooks";
import {addToCart, removeFromCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast"
import { AiOutlineShoppingCart,AiFillStar,AiOutlineStar } from "react-icons/ai";
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
   
    key={id} className="border border-gray-200  flex flex-col justify-around min-h-[400px] max-h-[400px] rounded-2xl hover:shadow-2xl  ">
       <div
        onClick={()=>navigate(`/${id}`)}
       className="text-center p-2 flex justify-center  min-h-[60%]  max-h-[60%]   ">
        <img className="inline-block  rounded-2xl  " src={img} alt={title} />
      </div>

      <div className="  flex flex-col gap-2 ml-4  rounded-2xl  ">
       <p className="text-gray-500 text-[14px]  font-medium">{category?.toUpperCase()}</p>
        <h2 className=" text-xs ">{title?.slice(0,20).toUpperCase()}...</h2>

      

      
    </div>
    <div className="mt-3 flex text-[#ffb21d] items-center ml-4">
         <AiFillStar />
         <AiFillStar />
         <AiFillStar />
         <AiFillStar />
         <AiOutlineStar/>
       <p className="text-gray-600 text-[14px] ml-2">(3 Review)</p>
       </div>
   {addToCartBt && product.find(item => item.id === id)?
   <div className="flex flex-col md:flex md:flex-row justify-around items-center mb-2 mt-3">
   {/* <h2 className="font-medium text-accent text-x1">${price}</h2> */}
  <div className="">
  <p className="text-base font-semibold text-pink">{price}$</p>
  </div>
    <div
      className="flex gap-2 items-center rounded-lg bg-gray-700 text-white p-2  cursor-pointer
       hover:bg-accent"
        onClick={()=>{dispatch(removeFromCart(id),toast.success("Removed from cart"));setAddToCartBtn(false)}}
           >
            
      <AiOutlineShoppingCart className="text-xs" /><p className="text-sm">Remove From Cart</p>
     </div>
 </div> :
 <div className="flex  md:flex md:flex-row justify-around items-center mb-2 mt-3">
     {/* <h2 className="font-medium text-accent text-x1">${price}</h2> */}
     <div>
  <p className="text-base font-semibold text-pink">{price}$</p>
  </div>
      <div
        className="flex gap-2 items-center rounded-lg bg-pink text-white p-2 cursor-pointer
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