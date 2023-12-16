import React, {useState} from 'react'
import { CartProvider, useCart } from "react-use-cart";
import { Link } from 'react-router-dom';
import Header from '../HomePage/Header.js';
import PageHeader from './PageHeader.js';
import Products from './Products.js';
import Footer from '../HomePage/Footer.js';

function AllShop() {
    
    const { totalItems, addItem } = useCart();
    const [detail, setDetail] = useState([]);
    const [Close, setClose] = useState(false)
    const detailPage = (product) => {
        setDetail([{ ...product }])
        setClose(true)
    }

    return (
        <CartProvider>
            {
                Close ?
                    <div className='detail-container'>
                        <div className='detail-contant'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <Link className="nav-link position-relative" to="/cart">
                                    <i className="fas fa-cart-plus mx-2 fa-xl text-danger"></i>
                                    <span className='position-absolute text-info'>({totalItems})</span>
                                </Link>
                                <button className='close' onClick={() => setClose(false)}><i className='fas fa-xmark'></i></button>
                            </div>

                            {
                                detail.map((item) => {
                                    return (
                                        <div className='p-3 d-flex detail-info' key={item.id}>
                                            <div className="img-box">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className='ml-5'>
                                                <p className="text-danger m-0">{item.name}</p>
                                                <p className="text-muted m-0 des">{item.description}</p>
                                                <h3 className='text-warning'>
                                                    &#9733; &#9733; &#9733;
                                                </h3>
                                                <p className="text-info fw-bold m-1">{item.price} $</p>
                                                <button onClick={() => addItem(item)} className='btn btn-danger fw-bold'>add to cart</button>
                                            </div>
                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div> : null
            }
            <Header />
            <PageHeader />
            <Products />
            <Footer />
        </CartProvider>
    )
}

export default AllShop;
