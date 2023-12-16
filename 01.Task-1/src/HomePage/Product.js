/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { CartProvider, useCart } from 'react-use-cart';

function Product() {
    const {
        addItem,
        totalItems,
    } = useCart();

    const product = [
        {
            "id": 1,
            "title": "Item",
            "thumbnail": "./img/image-product-1.jpg",
            "price": "$125.00",
        },
        {
            "id": 2,
            "title": "Item",
            "thumbnail": "./img/image-product-2.jpg",
            "price": "$125.00",
        },
        {
            "id": 3,
            "title": "Item",
            "thumbnail": "./img/image-product-3.jpg",
            "price": "$125.00",
        },
        {
            "id": 4,
            "title": "Item",
            "thumbnail": "./img/image-product-4.jpg",
            "price": "$125.00",
        },
    ];

    const [mainProduct, setMainProduct] = useState(product[0]);
    const changeMainProduct = (newProduct) => {
        setMainProduct(newProduct);
    };


    //
    const [quantity, setQuantity] = useState(1); 

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1)); 
    };

    const handleAddToCart = (item) => {
        const itemWithQuantity = { ...item, quantity };
        addItem(itemWithQuantity); 
    };

    return (
        <CartProvider>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 left-image">
                            <img src={mainProduct.thumbnail} className="img-fluid rounded-9" />
                            <div className="col-md-12">
                                <div className="row products mt-5">
                                    {product.map((item, index) => (
                                        <div className="col-md-3 col-sm-3 element" key={index}>
                                            <img src={item.thumbnail} className="img-fluid" onClick={() =>
                                                changeMainProduct(item)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 offset-1 details">
                            <div className="text">
                                <h5>Sneaker Company</h5>
                                <h1>Fall Limited Edition Sneakers</h1>
                                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
                                    outer sole, they’ll withstand everything the weather can offer.</p>
                            </div>
                            <div className="price">
                                <h3>{product[1].price} <span className="rounded-2">50%</span></h3>
                                <h5 className='text-decoration-line-through'>$250.00</h5>
                            </div>

                            <div className="submit mb-sm-3">
                                <div className='row'>
                                    <div className="col-md-6">
                                        <button className="btn update px-2 mr-2" onClick={decrementQuantity}>
                                            <i className="fas fa-minus"></i>
                                        </button>

                                        <input type='text' disabled value={quantity}
                                            className='text-center p-2' style={{ width: "30px" }} />
                                        <button className="btn update px-2 ml-2" onClick={incrementQuantity}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>

                                    <button className=" col-md-6 mt-sm-1 btn text-capitalize rounded-5"
                                        onClick={() => handleAddToCart(mainProduct)}>

                                        <img src="img/icon-cart.svg" className="mr-2" />
                                        Add to cart
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </CartProvider>
    )
}

export default Product;