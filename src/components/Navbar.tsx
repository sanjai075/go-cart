import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useAppSelector } from "../redux/hooks";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from "../../public/Assets/logo.png"

const Navbar = ({setShowCart}:any) => {

const cartCount = useAppSelector((state)=> state.cartReducer.length)

  return (
    <div className="pt-4 bg-white top-0 sticky   backdrop-blur-xl bg-opacity-65 ">
       <div className="container">
         <div className="flex justify-around items-center font-semibold text-black md:text-lg ">
          <img className="w-11 sm:w-14 mt-1" src={logo} alt="" />

          <AnchorLink className=" hover:text-blue-500  transition-all duration-200 ease-out " href=""> Home</AnchorLink>
          <AnchorLink className=" hover:text-blue-500 transition-all duration-200 ease-out" href="#trend"> Trending Products</AnchorLink>
          <AnchorLink className=" hover:text-blue-500 transition-all duration-200 ease-out" href="#arr">New Arraivals</AnchorLink>
            
            <div className="lg:flex hidden max-w-[250px]">
              <input 
              className="border-2 bg-white outline-none border-accent px-2 py-2 w-full"
               type="text"
                placeholder="search for products..."
                />

           <div className="bg-accent text-white text-[26px]  grid place-items-center px-4">
          <BsSearch />
           </div>
         </div>

     <div className="flex gap-4 md:gap-8 items-center">
      <div className="md:flex gap-3 hidden">
        <div className="rounded-full border-2 border-gray-300 text-gray-300 text-[32px] w-[50px] h-[50px]
        grid place-items-center">
          <AiOutlineUser/>
        </div>

 <div>
  <p className="text-gray-500">Hello, Sign in</p>
  <p className="font-medium">Your Account</p>
 </div>
</div>


<div 
onClick={()=>setShowCart(true)}
className="text-gray-500 text-[32ppx] relative">

<AiOutlineShoppingCart/>
<div className="absolute top-[-15px]  right-[-10px] bg-red-600 w-[20px] h-[20px] rounded-full text-white text-[14px]
flex justify-center items-center">
 <p className="">{cartCount}</p> 

</div>
</div>

     </div>

         </div>
         <div className="border-b border-gray-200 pt-4"></div>
       </div>
    </div>
  )
}

export default Navbar