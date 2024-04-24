import ProductCard from "./ProductCard";
import headphone from "../../public/Assets/headphone.png"
import earpods from "../../public/Assets/earpods.png"
import iphone from "../../public/Assets/iphone.png"
import jbl from "../../public/Assets/jbl.png"
import phone from "../../public/Assets/phone.png"
import projector from "../../public/Assets/projector.png"
import sony from "../../public/Assets/sony.png"
import watch from "../../public/Assets/watch.png"
import arr from "../../public/Assets/newarr.png"
import shopping from "../../public/Assets/shopping.png"
import shopping1 from "../../public/Assets/shopping1.png"
import shopbanner from "../../public/Assets/shopbanner.jpg"


const products = [
    {
    id: 0,
    img: headphone,
    category: "Headphones",
    title: "Gaming Headphone",
    price: "109.00",
    },
    {
    id: 1,
    img: earpods,
    category: "Mobile Tablets",
    title: "Galaxy Android Tablet",
    price: "300.00",
    },
    {
    id: 2,
    img: iphone,
    category: "Headphones",
    title: "Wireless Headphone",
    price: "105.00",
    },
    {
        id: 3,
        img: jbl,
        category: "Headphones",
        title: "Wireless Headphone",
        price: "199.00",
        }, 
        {
        id: 4,
        img: phone,
        category: "Mobile Tablets",
        title: "iPhone 14 Pro",
        price: "1099.00",
        },
        {
        id: 5,
        img: watch,
        category: "Mobile Tablets",
        title: "Apple iPad Air",
        price: "300.00",
        },

     
            {
            id: 6,
            img: sony,
            category: "CPU Heat Pipes",
            title: "DeepCool Air Cooler",
            price: "80.00",
            },
            {
            id: 7,
            img: projector,
            category: "CPU Heat Pipes",
            title: "Air Cooler",
            price: "80.00",
            },
            ];

            
            const NewAravials = () => {
              return (
                <div id="arr" className="container mt-16 ">
                    <div
                    style={{
                         backgroundImage: `url(${shopbanner})`,
                        backgroundSize: 'cover', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center',}}
                    className="sm:flex sm:flex-row sm:justify-around rounded-2xl  flex flex-col items-center    ">
                        <img className="sm:w-[40%] md:w-[30%]   w-[70%] " src={arr} alt="" />
                        <img className=" sm:w-[50%] md:w-[34%]  rounded-2xl w-[80%]" src={shopping1} alt="" />
                        
                    </div>
            
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8 ">
                 
                 {
                  products.map((item)=>(
                    <ProductCard
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    category={item.category}
                    title={item.title}
                   price={item.price}
                    />
                  ))                 }
            </div>
            <div className="border-b border-gray-200 pt-4"></div>
                    
                </div>
              )
            }
            
            export default NewAravials