import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useState } from "react";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Card from "./components/Card";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import MensClothing from "./components/MensClothing";
import Electronics from "./components/Electronics";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="bg-white">
      <KindeProvider
       clientId="cdffeded5e5a481f9b138c7bfe70568d"
       domain="https://gocart.kinde.com"
       redirectUri="http://localhost:5173"
       logoutUri="http://localhost:5173"
      >
        <Provider store={store}>
          <BrowserRouter>
            {showCart && <Cart setShowCart={setShowCart} />}
            <Navbar setShowCart={setShowCart} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Card />} />
              <Route path ="/mensclothing" element={<MensClothing/>}/>
              <Route path ="/electronics" element={<Electronics/>}/>
            </Routes>
            <Footer />
            <Toaster position="bottom-center" reverseOrder={false} />
          </BrowserRouter>
        </Provider>
      </KindeProvider>
    </div>
  );
}

export default App;
