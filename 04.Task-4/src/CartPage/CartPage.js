/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { CartProvider, useCart } from "react-use-cart";
import Header from '../HomePage/Header';
import PageHeader from './PageHeader';
import Footer from '../HomePage/Footer';
import { Link } from 'react-router-dom';
import Trending from '../HomePage/Trending';

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart,
        totalItems,
    } = useCart();

    if (isEmpty)
        return (
            <CartProvider>
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
                                                        <h6 className="mb-0 text-muted">{totalUniqueItems} items</h6>
                                                    </div>
                                                    <div className='text-center'>
                                                        <i className="fa-regular fa-circle-xmark my-5 text-danger" style={{ fontSize: "90px", }}></i>
                                                        <h1>Your cart is empty...</h1>
                                                        <Link to="/shop"> <button className='btn btn-primary mt-5 border-0'> Add Item</button></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 bg-grey">
                                                <div className="p-5">
                                                    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                    <hr className="my-4" />

                                                    <div className="d-flex justify-content-between mb-4">
                                                        <h5 className="text-uppercase">items {totalUniqueItems}</h5>
                                                        <h5>$ {cartTotal}</h5>
                                                    </div>

                                                    <h5 className="text-uppercase mb-3">Shipping</h5>

                                                    <div className="mb-4 pb-2">
                                                        <select className="rounded btn btn-lg" disabled>
                                                            <option value="1">Standard-Delivery- €5.00</option>
                                                        </select>
                                                    </div>

                                                    <h5 className="text-uppercase mb-3">Give code</h5>

                                                    <div className="mb-5">
                                                        <div className="form-outline border">
                                                            <input type="text" id="form3Examplea2"
                                                                className="form-control form-control-lg" disabled />
                                                            <label className="form-label" for="form3Examplea2">Enter your code</label>
                                                        </div>
                                                    </div>

                                                    <hr className="my-4" />

                                                    <div className="d-flex justify-content-between mb-5">
                                                        <h5 className="text-uppercase">Total price</h5>
                                                        <h5>$ {cartTotal}</h5>
                                                    </div>

                                                    <button type="button" className="btn btn-dark btn-block btn-lg"
                                                        data-mdb-ripple-color="dark" disabled>Register</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </CartProvider>

        )
    else
        return (
            <CartProvider>
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
                                                        <h6 className="mb-0 text-muted">{totalUniqueItems} items</h6>
                                                    </div>
                                                    {items.map((item) => (
                                                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <hr className="my-4" />
                                                            <div className="col-md-1 col-lg-2 col-xl-2">
                                                                <img src={item.thumbnail} className="img-fluid rounded-3" alt="" />
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                                <h6 className="text-black mb-0">{item.title}</h6>
                                                                <p className="text-muted">{item.platform}</p>
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
                                                                <h6 className="mb-0">$ {item.price}</h6>
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
                                                            <Link to="/shop" className="text-white">
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
                                                        <h5 className="text-uppercase">items {totalItems}</h5>
                                                        <h5>$ {cartTotal}</h5>
                                                    </div>

                                                    <h5 className="text-uppercase mb-3">Shipping</h5>

                                                    <div className="mb-4 pb-2">
                                                        <select className="rounded btn btn-lg">
                                                            <option value="1">Standard-Delivery- €5.00</option>
                                                        </select>
                                                    </div>

                                                    <h5 className="text-uppercase mb-3">Give code</h5>

                                                    <div className="mb-5">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Examplea2"
                                                                className="form-control form-control-lg" />
                                                            <label className="form-label" for="form3Examplea2">Enter your code</label>
                                                        </div>
                                                    </div>

                                                    <hr className="my-4" />

                                                    <div className="d-flex justify-content-between mb-5">
                                                        <h5 className="text-uppercase">Total price</h5>
                                                        <h5>$ {cartTotal}</h5>
                                                    </div>

                                                    <button type="button" className="btn btn-dark btn-block btn-lglaunch" data-toggle="modal" data-target="#staticBackdrop"
                                                        data-mdb-ripple-color="dark">Register</button>

                                                    {/* <!-- Modal --> */}
                                                    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1"
                                                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-body">
                                                                    <div class="text-right"> <i class="fa fa-close close" data-dismiss="modal"></i> </div>
                                                                    <div class="tabs mt-3">
                                                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                                            <li class="nav-item" role="presentation"> <Link class="nav-link active" id="visa-tab" data-toggle="tab"
                                                                                role="tab" aria-controls="visa" aria-selected="true"> <img
                                                                                    src="./img/payment.png" style={{ width: "200px" }} /> </Link> </li>
                                                                        </ul>
                                                                        <div class="tab-content" id="myTabContent">
                                                                            <div class="tab-pane fade show active" id="visa" role="tabpanel" aria-labelledby="visa-tab">
                                                                                <div class="mt-4 mx-4">
                                                                                    <div class="text-center">
                                                                                        <h5>Credit card</h5>
                                                                                    </div>
                                                                                    <div class="form mt-3">
                                                                                        <div class="inputbox"> <input type="text" name="name" class="form-control" required="required" />
                                                                                            <span>Cardholder Name</span> </div>
                                                                                        <div class="inputbox"> <input type="text" name="cardNumber" min="1" max="16" class="form-control"
                                                                                            required="required" /> <span>Card Number</span> <i class="fa fa-eye"></i> </div>
                                                                                        <div class="d-flex flex-row">
                                                                                            <div class="inputbox"> <input type="text" name="Ex-Date" min="1" max="5" class="form-control"
                                                                                                required="required" /> <span>Expiration Date</span> </div>
                                                                                            <div class="inputbox"> <input type="number" name="CVV" min={1} max={3} class="form-control"
                                                                                                required="required" /> <span>CVV</span> </div>
                                                                                        </div>
                                                                                        <div class="px-5 pay"> <button class="btn btn-success btn-block">Add card</button> </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

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
        );
}


function CartPage() {
    return (
        <CartProvider>
            <Header />
            <PageHeader />
            <Cart />
            {/* <Trending /> */}
            <Footer />
        </CartProvider>
    )
}

export default CartPage;
