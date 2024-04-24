import { removeFromCart, removeQuantity ,addQuantity} from "../redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { MdDelete } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import cart from "../../public/Assets/cart.png"
import cart1 from "../../public/Assets/cartimg.png"
import cartl from "../../public/Assets/cartleft.png"



const Cart = ({setShowCart}:any) => {
     const dispatch = useAppDispatch()

     const cartCount = useAppSelector((state)=> state.cartReducer.length)

    const product = useAppSelector((state)=>state.cartReducer)

    const getTotal = ()=>{
      let total = 0;
      product.forEach((item)=>total = total+ item.quantity * item.price)
      return total
    }
  return (
    <div className="  min-h-screen max-h-screen fixed bg-white w-full right-0 sm:w-[400px] md:w-[500px]  z-20  flex flex-col justify-between text-black ">
        
         <div className="flex justify-around gap-8 text-base p-3 font-bold">
          
            
            <div className=" flex-col items-center ">
            <h1 className="">{`CART ITEMS (${cartCount})`}</h1>
<div className=" flex justify-center ">
<img className="w-12" src={cartl} alt="" />
</div>
            </div>
            <img className="w-32 " src={cart1} alt="" />
            
            <p onClick={()=>setShowCart(false)} className="cursor-pointer"><IoMdArrowBack className=" text-2xl w-12 " /></p>
          </div>
          
          
          <div className="  overflow-y-scroll">
            {
            product.length>=1 ?
            product.map((item:any)=>(
                <div className="flex justify-between p-3 gap-2 mb-7 border-b hover:shadow-2xl font-semibold rounded-2xl m-2">
                    <div className="">
                    <img className="w-20  h-20" src = {item.img} alt="" />
                    </div>

                 <div className="flex flex-col   w-44 ">
                 <p>${item.price}</p>
                   <p> {item.title}</p>
                   <p><span>{item.quantity}</span>x ${item.price}</p>
                  <div className="flex  justify-around w-[60px] gap-3 ">
                  <button className="font-bold  " onClick={()=>dispatch(removeQuantity(item.id))}> -

                 </button>
                  <p>{item.quantity}</p>
                 <button onClick={()=>dispatch(addQuantity(item.id))}>+

                      </button>
                  </div>
                 </div> 

                    <div className=" text-center mt-6 ">
                    <MdDelete
                    onClick={()=>dispatch(removeFromCart(item.id))}
                    className="w-16 h-7 text-[#0b0b0b] " />
                    </div>
                  
                </div>
            )):<div>
              <img className="mt-9" src={cart} alt="" />
            </div>
          
          }
          </div>

          <div className="md:flex md:justify-aroundmd md:text-xl md:p-3 font-semibold ">
              <div className=" flex md:w-[200px] md:p-10 md:gap-3 justify-center gap-3 p-3">
                <p>Total</p>
               <p>${getTotal()}</p>
              </div>
          
          <div className=" flex flex-col  gap-2  md:w-[200px] m-2">
               <button
                onClick={()=>setShowCart(false)}
               className="bg-gray-300 text-lg p-2">Continue Shopping</button>
               <button className="bg-black text-white text-lg p-2">Buy Now</button>
          </div>
          </div>
          
         
    </div>
   
  )
}

export default Cart