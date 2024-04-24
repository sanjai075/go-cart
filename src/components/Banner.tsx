 import banner1 from "../../public/Assets/banner1.jpg"
 import banner2 from "../../public/Assets/banner2.jpg"
 import backbanner from "../../public/Assets/backbanner.jpg"
 import product from "../../public/Assets/product.png"

 export const Banner = () => {
    return (
    <div className="container mt-20 text-white flex ">
       
       <div className="  gap-4 md:pr-[15px]  w-full">
        
          <div
             style={{ 
               backgroundImage: `url(${backbanner})`}}
              className="h-[200px] w-[100%] md:h-[260px] md:w-[100%]  bg-cover bg-center rounded-xl p-8 md:p-16 flex justify-center">

          <div className="flex flex-col justify-cente w-[40%] md:mr-4  items-center  sm:w-[30%]  text-blue-900  sm:text-2xl text-xl font-bold">
           <p>50% off on </p>
           <p>All Products</p>
           <a
             className="inline-block   hover: text-accent text-topHeadingSecondary font-medium"
           href="#"
           >
          Shop Now
           </a>
          </div>
       </div>

      

     </div>

     <div
       className=" w-[400px] rounded-3xl hidden lg:block">
        <img className="rounded-2xl h-full w-full object-cover" src={product} alt="" />
        
      </div>

    </div>
    ) };