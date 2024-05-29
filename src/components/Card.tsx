import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useAppDispatch,useAppSelector} from "../redux/hooks";
import {addToCart, removeFromCart } from "../redux/features/cartSlice";

import toast from "react-hot-toast"
import { AiOutlineShoppingCart } from "react-icons/ai";




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
                
                className={`flex  mt-1 flex-col bg-no-repeat bg-cover items-center min-h-svh sm:max-h-screen   justify-around sm:flex-row   `}>

                    <div className='  rounded-2xl sm:w-[250px] sm:h-[250px] p-3 w-80 sm:mt-[-120px] '>
                        <img className='rounded-2xl' src={item.images[0]} alt="" />
                    </div>

                    <div className="text-2xl  p-6 sm:w-[500px]  text-pink sm:mt-[-120px]   ">
                        <h1 className='text-center sm:text-left font-semibold text-3xl mb-5'>
                            {item.title.toUpperCase()}
                        </h1>

                        <h4 className='text-lg text-black font-semibold'>
                            {item.description}
                        </h4>
                        {addToCartBt  && product.find(item => item.id === id)?
   <div className=" flex flex-col  ">
     <p className='mt-5  sm:self-start self-center font-semibold'>{item.price}$</p>
   {/* <h2 className="font-medium text-accent text-x1">${price}</h2> */}
    <div
      className="flex gap-2 items-center justify-center rounded-lg md:max-w-44 w-full bg-gray-700 text-white p-2 mt-5 cursor-pointer
       hover:bg-accent"
        onClick={()=>{dispatch(removeFromCart(id),toast.success("Removed from cart"));setAddToCartBtn(false)}}
           >
      <AiOutlineShoppingCart className="text-2xl" /><p className="text-sm">Remove From Cart</p>
     </div>
 </div> :
 
<div className='flex flex-col  ' >
  <p className='mt-5 sm:self-start self-center font-semibold'>{item.price}$</p>
<div className="md:max-w-40 bg-slate-200 flex  mb-2 mt-5 ">
     {/* <h2 className="font-medium text-accent text-x1">${price}</h2> */}
      <div
        className="flex w-full justify-center gap-2 items-center rounded-lg bg-pink text-white p-2 cursor-pointer
         hover:bg-accent"
          onClick={()=>{addProductToCart();setAddToCartBtn(true)}}
             >
        <AiOutlineShoppingCart className="text-end" />
         <p className="text-sm">Add To Cart</p>
       </div>
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
