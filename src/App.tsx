import { Provider } from "react-redux"
import { store } from "./redux/store"
import Navbar from "./components/Navbar"
import Hero from "./Hero"
import Feature from "./components/Feature"
import TrendingProducts from "./components/TrendingProducts"
import { Toaster } from "react-hot-toast"
import { Banner } from "./components/Banner"
import NewAravials from "./components/NewAraivals"
import Footer from "./components/Footer"
import { useState } from "react"
import Cart from "./components/Cart"
import black from "../public/Assets/black.png"
import blue from "../public/Assets/blue.png"
import wave from "../public/Assets/ave.png"


function App() {
  const [showCart,setShowCart] = useState(false)
  return (
   <div
  //  style={{
  //   backgroundImage: `url(${blue})`,
  //   backgroundSize: 'cover', // Adjust as needed
  //   backgroundRepeat: 'no-repeat', // Adjust as needed
  //   backgroundPosition: 'center' // Adjust as needed
  //  }}
   className="bg-white">
    <Provider store={store}>
    {showCart && <Cart setShowCart={setShowCart}/>}
      <Navbar setShowCart={setShowCart}/>
      
      <Hero/>
      <Feature/>
      <TrendingProducts/>
      <Banner/>
      <NewAravials/>
      <Footer/>
      <Toaster position="bottom-center"reverseOrder={false}/>
    </Provider>
   </div>
  )
}

export default App