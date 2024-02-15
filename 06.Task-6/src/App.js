import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";


// Pages
import Home from "./Components/HomePage/Home";
import About from "./Components/AboutPage/About";
import Contact from "./Components/HelpPage/Contact";
import Faq from "./Components/HelpPage/Faq";
import NotFound from "./Components/NotFound";
import Products, { productsLoader } from "./Components/ProductsPage/Products";
import ProductDetails, { productDetailsLoader } from "./Components/ProductsPage/ProductDetails";
import ProductsError from "./Components/ProductsPage/ProductsError";


// Layoutes 
import MainPage from "./Layouts/MainPage";
import HelpPage from "./Layouts/HelpPage";
import ProductsPage from "./Layouts/ProductsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpPage />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="products" element={<ProductsPage />} errorElement={<ProductsError/>}>
        <Route
          index
          element={<Products />}
          loader={productsLoader} />

        <Route
          path=":id"
          element={<ProductDetails />}
          loader={productDetailsLoader} 
          
          />

      </Route>


      <Route path='*' element={<NotFound />} />
    </Route>

  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;