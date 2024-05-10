import Feature from "./Feature";
// import TrendingProducts from "./TrendingProducts"
// import { Toaster } from "react-hot-toast"
import { Banner } from "./Banner"
// import NewAravials from "./NewAraivals"
// import Footer from "./Footer"
import Hero from "../Hero"
import NewPproducts from "./NewProducts";

const Home = () => {
  return (
    <div>
         
       <Hero/>
       <Feature/>
      {/* <TrendingProducts/> */}
     
      {/* <NewAravials/> */}
      <NewPproducts/>
      <Banner/>
      

    </div>
  )
}

export default Home