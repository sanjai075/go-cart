import axios from "axios";
import { useEffect, useState } from "react";
import Products from "./Products";

interface Product {
    id: number;
    images: any;
    title: string;
    price: string;
    rating: any;
    category: any;
    // Other properties of the product
}

const Newproducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://api.escuelajs.co/api/v1/products');
                setProducts(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
console.log(products)
    return (
        <div>
        {loading ? (
            <div className='min-h-screen flex justify-center '>
                <div className=' mt-52'> <span className="loading loading-dots loading-lg  "></span></div>
            </div>
        ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mt-8  gap-3 m-4">
                {products.slice(0, 30).map((item) => {
                   


                    return (
                        <Products
                            key={item.id}
                            id={item.id}
                            img={item.images[0]}
                            category={item.category.name}
                            // rating={item.rating.rate}
                            // count={item.rating.count}
                            title={item.title}
                            price={item.price}
                        />
                    );
                })}
            </div>
        )}
    </div>
    );
};

export default Newproducts;
