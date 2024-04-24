import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" p-10 bg-slate-50 mt-2 flex justify-around  text-black ">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold mb-5">Services</h1>
          <a className=" cursor-pointer hover:underline">Branding</a>
          <a className="cursor-pointer hover:underline">Design</a>
          <a className="cursor-pointer hover:underline">Marketing</a>
          <a className="cursor-pointer hover:underline">Advertisement</a>
        </div> 
        <div className="flex flex-col">
          <h6 className="text-xl font-bold mb-5">Company</h6> 
          <a className="cursor-pointer hover:underline">About us</a>
          <a className="cursor-pointer hover:underline">Contact</a>
          <a className="cursor-pointer hover:underline">Jobs</a>
          <a className="cursor-pointer hover:underline">Press kit</a>
        </div> 
        <div className="flex flex-col items-center  ">
          <h6 className="text-xl font-bold mb-5">Social</h6> 
          <div className="flex   md:gap-6 gap-2">
          <FaTwitter className="hover:scale-125 md:w-9 md:h-5 transition-all duration-200 ease-out" />
          <RiInstagramFill className="hover:scale-125 md:w-9 md:h-5transition-all duration-200 ease-out " />
          <FaYoutube className="hover:scale-125 md:w-9 md:h-5 transition-all duration-200 ease-out"/>
          <FaFacebookF className="hover:scale-125 md:w-9 md:h-5 transition-all duration-200 ease-out" />
          </div>
        </div>
      </footer>
    );
    }; 
    export default Footer;