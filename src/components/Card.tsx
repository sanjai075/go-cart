import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useAppDispatch,useAppSelector} from "../redux/hooks";
import {addToCart, removeFromCart } from "../redux/features/cartSlice";

import toast from "react-hot-toast"
import { AiOutlineShoppingCart } from "react-icons/ai";
import background from "../../public/Assets/download.png"
import bck from "../../public/Assets/bck.jpg"
import blue from "../../public/Assets/blue.png"



// interface propsType {
//     id: number;
//     img: any;
//     category: any;
//     title: any;
//     price: any;
    
//     }


interface Product {
    id: number;
    images: any;
    title: string;
    // price: string;
    // rating: any;
    category: string;
    description: string;
    price:number;
}

const Card = () => {
    const { id } = useParams<{ id: any }>();
    const [item, setItem] = useState<Product | null>(null);
    const [addToCartBt,setAddToCartBtn]=useState(false)
    const product = useAppSelector((state)=>state.cartReducer)
    const dispatch = useAppDispatch()

    const addProductToCart = ()=>{

        const payload = {
            id:id,
            title : item?.title,
            img:item?.images[0],
            price:item?.price,
            quantity:1,
        }
        dispatch(addToCart(payload))
        toast.success("Added to cart")
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        const fetchCharacter = async () => {
            try {
                const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
                setItem(res.data);
                console.log(res.data);
            } catch (error) {
                // Handle error if needed
                console.error('Error fetching product data:', error);
            }
        };

        // Check if item is null before fetching data
        if (!item) {
            fetchCharacter();
        }
    }, [id, item]); // Only id is a dependency

    return (
        <>
            {(!item) ? (
                <div className='min-h-screen flex justify-center '>
                    <div className=' mt-60'> <span className="loading loading-dots loading-lg  "></span></div>
                </div>
            ) : (
                <div
                // style={{
                //     backgroundImage:`url(${background})`
                // }}
                
                className={`flex bg-gradient-to-r from-gray-100 to-gray-300 flex-col bg-no-repeat bg-cover items-center min-h-svh sm:max-h-screen   justify-around sm:flex-row   `}>

                    <div className='  rounded-2xl sm:w-[250px] sm:h-[250px] p-3 w-80 sm:mt-[-120px] '>
                        <img className='rounded-2xl' src={item.images[0]} alt="" />
                    </div>

                    <div className="text-black text-2xl  p-6 sm:w-[500px]  font-['Orwgano,cursive'] sm:mt-[-120px]   ">
                        <h1 className='text-center sm:text-left text-3xl mb-5'>
                            {item.title}
                        </h1>

                        <h4 className='text-xl text-black'>
                            {item.description}
                        </h4>
                        {addToCartBt  && product.find(item => item.id === id)?
   <div className="flex flex-col md:flex md:flex-row justify-around items-center mb-2 mt-5 ">
   {/* <h2 className="font-medium text-accent text-x1">${price}</h2> */}
    <div
      className="flex gap-2 items-center rounded-xl bg-gray-700 text-white p-2  cursor-pointer
       hover:bg-accent"
        onClick={()=>{dispatch(removeFromCart(id),toast.success("Removed from cart"));setAddToCartBtn(false)}}
           >
      <AiOutlineShoppingCart className="text-xs" /><p className="text-sm">Remove From Cart</p>
     </div>
 </div> :
 <div className="flex flex-col md:flex md:flex-row justify-around items-center mb-2 mt-5 ">
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
                  

                </div>
            )}
        </>
    );
};

export default Card;
