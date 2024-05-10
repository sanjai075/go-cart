import { easeOut } from "framer-motion/dom"
import laptop from "../public/Assets/laptop.png"
import top from "../public/Assets/top.jpg"
import top1 from "../public/Assets/top1.jpg"
import{motion} from "framer-motion"

const Hero = () => {
  return (
    <>
    <motion.div
    
 
    className="m-6">
      <img className="rounded-2xl" src={top1} alt="" />
    </motion.div>
    </>
    // <div className="bg-gradient-to-r from-cyan-500 to-blue-500 mt-4 w-[95%] md:w-[98%] rounded-2xl ml-3 ">
    //     <div className="container grid md:grid-cols-2 py-8 ">
    //         <div className="flex items-center">
    //             <div className="max-w-[450px] space-y-4">

                
    //             <p className="text-topHeadindSecondary">
    //               Starting At <span className="font-bold">$999.00</span>
    //            </p>

    //            <h2 className="text-topHeadingPrimary font-bold text-4xl md:text5xl">
    //              The best Laptop collection 2024</h2>

    //              <h3 className="text-2xl font-['Orwgano,cursive']">
    //                 Exclusive offer <span className="text-red-600">-10%</span>off this week
    //              </h3>
    //              <a className="inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white" href="#">Shop Now</a>
    //              </div>
    //         </div>

    //         <div>
    //             <img src={laptop} alt="" />
    //         </div>
    //     </div>
    // </div>
  )
}

export default Hero