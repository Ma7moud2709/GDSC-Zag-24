import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Pages/Products';
import Sidebar from './components/Sidebar';
import Home from './components/Pages/Home';
import Categories from './components/Pages/Categories';
import AddProduct from './components/Pages/Operations/AddProduct';
import ViewProduct from './components/Pages/Operations/ViewProduct';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} >
            </Route>
            <Route path="products/add" element={<AddProduct />} />
            <Route path="products/:productID" element={<ViewProduct />} />
            <Route path="categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
