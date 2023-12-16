import React from 'react';
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from 'react-use-cart';
import Navbar from '../HomePage/Navbar';

function Cart() {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart,
        totalItems,
        cartTotal,
    } = useCart();

    if (isEmpty)
        return (
            <div>
                <Navbar />
                <section className='pt-5 mt-5 text-center' >
                    <i class="fa-regular fa-circle-xmark my-5" style={{ fontSize: "100px", color: "black" }}></i>
                    <h1 className=' text-danger'>Your Cart Is Empty</h1>
                    <Link to="/" className="text-white">
                        <button className="btn btn-primary my-3 "><i
                            className="fas fa-long-arrow-alt-left"></i><span className='ml-2'> Back to shop</span>
                        </button>
                    </Link>
                </section>
            </div>
        );

    return (
        <CartProvider>
            <Navbar />
            <section className="h-100 ">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                    <h6 className="mb-0 text-muted">{totalItems} items</h6>
                                                </div>
                                                {
                                                    items.map((item) => (
                                                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <hr className="my-4" />
                                                            <div className="col-md-1 col-lg-2 col-xl-2">
                                                                <img src={item.thumbnail} className="img-fluid rounded-3" alt="" />
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <button className="btn btn-link px-2" onClick={() =>
                                                                    updateItemQuantity(item.id, item.quantity - 1)
                                                                }>
                                                                    <i className="fas fa-minus"></i>
                                                                </button>

                                                                <input type='text' disabled value={item.quantity} className='text-center' style={{ width: "30px" }} />
                                                                <button className="btn btn-link px-2" onClick={() =>
                                                                    updateItemQuantity(item.id, item.quantity + 1)
                                                                }>
                                                                    <i className="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                <h6 className="mb-0">{item.price}</h6>
                                                            </div>

                                                            <div className='col-md-1 col-lg-1 col-xl-1 text-end mt-2'>
                                                                <button type="button" class="bg-danger text-white border-0 rounded-2" data-mdb-toggle="tooltip"
                                                                    title="Move to the wish list">
                                                                    <i class="fas fa-heart" ></i>
                                                                </button>
                                                            </div>

                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end mt-2">
                                                                <button className=" bg-primary  border-0 rounded-2" onClick={() => removeItem(item.id)}>
                                                                    <i className="fas fa-times"></i></button>
                                                            </div>

                                                        </div>
                                                    ))}

                                                <hr className="my-4" />
                                                <div className='row'>
                                                    <div className="pt-5 col-md-4 ml-2 pl-4">
                                                        <Link to="/" className="text-white">
                                                            <button className="btn btn-primary mb-5 "><i
                                                                className="fas fa-long-arrow-alt-left"></i><span className='ml-2'> Back to shop</span>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                    <div className='col-md-3'></div>
                                                    <div className="pt-5 col-md-4 ml-2 pl-4">
                                                        <button className="btn btn-danger mb-5" onClick={emptyCart}>
                                                            <i class="fa-solid fa-trash-can"></i>
                                                            <span className='ml-2'> Empty Cart</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 rounded" style={{ backgroundColor: "#ccc" }}>
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">items {totalUniqueItems}</h5>
                                                </div>

                                                <h5 className="text-uppercase mb-3">Shipping</h5>

                                                <div className="mb-4 pb-2">
                                                    <select className="rounded btn btn-lg">
                                                        <option value="1">Standard-Delivery- €5.00</option>
                                                    </select>
                                                </div>
                                                <button type="button" className="btn btn-dark btn-block btn-lglaunch" data-toggle="modal" data-target="#staticBackdrop"
                                                    data-mdb-ripple-color="dark">Check Out</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >

        </CartProvider >
    )
}

export default Cart;
