import { useState,useEffect } from "react";
import axios from "axios";
import Products from "./Products";


interface Product {
    id: number;
    images:any;
    title:string;
    price:string;
    rating:any;
    category:any;

    // Other properties of the product
}
const MensClothing = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const[item,setItem]=useState(false)

 
    useEffect(() => {
      const fetchData = async () => {
        setItem(true)
          try {
              const res = await axios.get(` https://api.escuelajs.co/api/v1/products/?categoryId=3`);
              setProducts(res.data);
              setItem(false)
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      };

      fetchData();
  }, []);

    console.log(products)
  return (
    
    <>
    {(item)?  <div className='min-h-screen flex justify-center '>
      <div className=' mt-52'> <span className="loading loading-dots loading-lg  "></span></div>
    </div>:(
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mt-8 gap-3 m-4" >
        {products.slice(0,30).map((item)=>(
           <Products 
           key={item.id}
           id={item.id}
           img={item.images[0]}
           category={item.category.name}
           // rating={item.price}
           // count={item.rating?.count}
           title={item.title}
           price={item.price}

           />
        ))}
   </div>
    )}
    
    </>
  )
}

export default MensClothing