import {
    AiFillStar,
    AiOutlineStar,
    AiOutlineShoppingCart,}
    from "react-icons/ai";
    import {useAppDispatch} from "../redux/hooks";
    import {addToCart } from "../redux/features/cartSlice";
    import toast from "react-hot-toast"

    interface propsType {
    id: number;
    img: any;
    category: string;
    title: string;
    price: string;
    }

    const ProductCard = ({id,img,category,title,price}:propsType) => {

        const dispatch = useAppDispatch()

        const addProductToCart = ()=>{

            const payload = {
                id,
                img,
                title,
                price:parseFloat(price),
                quantity:1
            }
            dispatch(addToCart(payload))
            toast.success("Added to cart")
        }
    return (
    <div className="border border-gray-200 bg-gray-50 rounded-2xl hover:shadow-2xl  ">
       <div className="text-center ">
        <img className="inline-block w-[80%]  " src={img} alt={title} />
      </div>

      <div className=" md:px-3 md:py-4 py-2 rounded-2xl">
       <p className="text-gray-500 text-[14px] font-medium">{category}</p>
        <h2 className="font-medium">{title}</h2>

       <div className="mt-3 flex text-[#ffb21d] items-center">
         <AiFillStar />
         <AiFillStar />
         <AiFillStar />
         <AiFillStar />
         <AiOutlineStar/>
       <p className="text-gray-600 text-[14px] ml-2">(3 Review)</p>
      </div>

      <div className="flex flex-col md:flex md:flex-row justify-around items-center mt-4">
        <h2 className="font-medium text-accent text-x1">${price}</h2>
         <div
           className="flex gap-2 items-center rounded-xl bg-pink text-white px-4 py-2 cursor-pointer
            hover:bg-accent"
             onClick={addProductToCart}
                >
           <AiOutlineShoppingCart /> Add To Cart
          </div>
      </div>
    </div>
 </div>
    )
    }
    export default ProductCard