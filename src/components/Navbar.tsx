import { useAppSelector } from "../redux/hooks";
import logo from "../../public/Assets/logo.png";
import { easeOut, motion, } from "framer-motion";
import { Link,useLocation } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { useState,useEffect } from "react";

const Navbar = ({ setShowCart }: any) => {
  const location =useLocation()
  const [showLogin,setShowLogin]= useState(false)
  const [showLogOut,setShowLogOut]=useState(false)
  const cartCount = useAppSelector((state) => state.cartReducer.length);
  const { login, user,logout,register } = useKindeAuth();
  console.log("user", user?.given_name?.slice(0,1));

  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);
  const getLinkStyle = (path:string) => {
    return {
      color: activePage === path ? '#FFB1B1' : '#0C0C0C' // Change color based on active page
    };
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0, ease: easeOut }}
      className="pt-4 bg-white top-0 sticky   backdrop-blur-xl bg-opacity-65 "
    >
      <div className="container">
        <div className="flex justify-around items-center font-bold text-sm text-gray-600 md:text-base  ">
          <img className="w-11 sm:w-14 mt-1" src={logo} alt="" />

         <div className="flex w-[80%] justify-center md:gap-16 gap-4">
         <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: easeOut }}
          >
            {" "}
            <Link
              to={"/"}
              style={getLinkStyle('/')}
              className=" hover:text-pink  transition-all duration-200 ease-out "
            >
              {" "}
              HOME
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: easeOut }}
          >
            {" "}
            <Link to={"/mensclothing"}
            style={getLinkStyle('/mensclothing')}
              className=" hover:text-pink  transition-all duration-200 ease-out"
              
            >
              {" "}
             FURNITURES
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1, ease: easeOut }}
          >
            {" "}
            <Link to={"/electronics"}
             style={getLinkStyle('/electronics')}
              className=" hover:text-pink transition-all duration-200 ease-out"
              
            >
             SHOES
            </Link>
          </motion.div>
         </div>

         

          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex gap-3 ">
             

              
            {user? <div className="relative cursor-pointer">
             <div onClick={()=>setShowLogOut(!showLogOut)} className="text-xl uppercase rounded-full flex justify-center items-center text-white bg-pink md:w-10 md:h-10 w-8 h-8">
             <p> { user?.given_name?.slice(0,1)}</p>
             </div>
            {showLogOut? <div className="absolute right-0 cursor-pointer w-20 rounded-xl mt-3 bg-white shadow-lg p-2 sm:w-32 sm:p-3">
               <p onClick={()=>logout()}>Log Out</p>
             </div>:""}
            </div> : <div className=" relative cursor-pointer">
             <FaRegUser onClick={()=>setShowLogin(!showLogin)} />
            
             {showLogin?
             <div className="absolute text-slate-700 cursor-pointer gap-3 bg-white w-[130px] rounded-xl shadow-lg mt-3 text-base border-b p-4 font-semibold flex flex-col right-1 ">
             <p onClick={()=>login()}>Sign in </p>
             <p onClick={()=>register()}>Sign up</p>
            </div>:""}
             </div>}
            </div>

            <div
              onClick={() => setShowCart(true)}
              className=" text-[32ppx] relative cursor-pointer"
            >
              <FiShoppingCart />
              <div
                className="absolute top-[-15px]  right-[-10px] bg-red-600 w-[20px] h-[20px] rounded-full text-white text-[14px]
flex justify-center items-center"
              >
                <p className="">{cartCount}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 pt-4"></div>
      </div>
    </motion.div>
  );
};

export default Navbar;





