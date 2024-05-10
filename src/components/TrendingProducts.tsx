import ProductCard from "./ProductCard";
// import headphone from "../../public/Assets/headphone.png"
import earpods from "../../public/Assets/earpods.png"
import iphone from "../../public/Assets/iphone.png"
import jbl from "../../public/Assets/jbl.png"
import phone from "../../public/Assets/phone.png"
import projector from "../../public/Assets/projector.png"
import sony from "../../public/Assets/sony.png"
import watch from "../../public/Assets/watch.png"
// import shop from "../../public/Assets/shop.png"
import trend from "../../public/Assets/trend.png"
// import trend1 from "../../public/Assets/trend1.jpg"
import trennd1 from "../../public/Assets/trennd1.png"
// import back from "../../public/Assets/shopbanner.jpg"




const products = [
    {
    id: 0,
    img: "/public/Assets/headphone.png",
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

            
            const TrendingProducts = () => {
              return (
                <div id="trend" className="container mt-3 ">
                    <div
                    // style={{
                    //   backgroundImage : `url(${back})`,
                    //   backgroundSize: "coover",
                    //   backgroundRepeat: 'no-repeat', 
                    //   backgroundPosition: 'center',
                    // }}
                    className="sm:flex flex justify-center  sm:justify-around bg-gray-100 rounded-2xl items-center">
                       <img className=" " src={trennd1} alt="" />
                        <div className="  hidden sm:block md:w-[40%]  ">
                            <img className="   " src={trend} alt="" />
                         </div>
                    </div>
            
            <div className=" grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8">
              
                 
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
                    
                </div>
              )
            }
            
            export default TrendingProducts