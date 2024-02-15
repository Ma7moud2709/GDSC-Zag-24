/* eslint-disable jsx-a11y/alt-text */
// import { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Products() {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch("https://fakestoreapi.com/products")
    //         .then((res) => { res.json() })
    //         .then((items) => {
    //             setProducts(items)
    //         })

    // }, [])
    const products = useLoaderData();

    return (
        <div className='products'>
                        <h1 className='welcome'>Welcome To <span>Products</span> Page</h1>

            {
                products.map((item) => (
                    

                        <Link to={item.id.toString()} key={item.id}>
                            <div>

                                <p>{item.title}</p>
                                <p>Price: {item.price}</p>
                            </div>
                            <img src={item.image} />
                        </Link>

                    )
                )

            }
        </div>
    )
}

// Date Loader == useEffect

export const productsLoader = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    
    if(!res.ok){
        throw Error("Couldn't fetch the products...");
    }

    return res.json();
}

export default Products