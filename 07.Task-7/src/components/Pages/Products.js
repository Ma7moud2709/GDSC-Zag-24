import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
    }, [])


    const getAllProducts = () => {
        fetch('http://localhost:9000/products')
            .then((res) => res.json())
            .then((item) => setProducts(item))
    }


    const deleteProduct = (product) => {
        Swal.fire({
            title: `Are You Sure To Delete <br/> <span className='delete-message'>${product.title}...</span>?`,
            showCancelButton: true
        }).then((data) => {
            data.isConfirmed && (
                fetch(`http://localhost:9000/products/${product.id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((item) => getAllProducts())
            )
        }

        )

    }
    return (
        <div className='products'>
            <h1 className='section-title text-decoration-underline'>Products:</h1>
            <div className=''>
                <Link to='add' className='btn btn-success mt-3'>Add New Product</Link>
                <table className="table mt-5 text-center text-white " border= "1">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item) => {
                                return (
                                    <tr key={item.id} className='text-white'>
                                        <th scope="row">{item.id}</th>
                                        <td><img src={item.image} alt="" style={{ width: "100px", height: "100px", borderRadius: '10px' }} /></td>
                                        <td style={{ width: "200px" }}>{item.title}</td>
                                        <td><span className='text-warning'>$</span>{item.price}</td>
                                        <td>
                                            <Link to={`/products/${item.id}`} className='btn btn-primary'>View</Link>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger' onClick={() => deleteProduct(item)}>Delete</button>
                                        </td>
                                    </tr>

                                )
                            }
                            )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products