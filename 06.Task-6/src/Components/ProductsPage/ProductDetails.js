import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

function ProductDetails() {
    const { id } = useParams();
    const productDetail = useLoaderData();

    // console.log(id)
    return (
        <div className='ProductDetails'>
            <div className='txt'>
                <h1>Product Details</h1>
                <p>Product Details For: {productDetail.title}</p>
                <p className='price'>Price: <span>$ {productDetail.price}</span></p>

                <button className='btn'>Buy Now</button>
            </div>

            <img src={productDetail.image} alt="" />
        </div>
    )
}

// Loader Function

export const productDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch(`https://fakestoreapi.com/products/${id}`)

    if(!res.ok){
        throw Error("Couldn't find that product...");
    }

    return res.json()
}


export default ProductDetails