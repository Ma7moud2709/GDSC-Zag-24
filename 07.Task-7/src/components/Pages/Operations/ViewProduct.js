import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useParams, useNavigate  } from 'react-router-dom';

function ViewProduct() {
    const { productID } = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(productID)
        fetch(`http://localhost:9000/products/${productID}`)
            .then((res) => res.json())
            .then((item) => setProduct(item));
    }, []);

    const deleteProduct = (product) => {
        Swal.fire({
            title: `Are You Sure To Delete <br/> <span className='delete-message'>${product.title}...</span>?`,
            showCancelButton: true
        }).then((data) => {
            data.isConfirmed && (
                fetch(`http://localhost:9000/products/${product.id}`, {
                    method: "DELETE"
                })
                    .then((res) => {
                        res.json()
                        navigate("/products");
                    
                    })
            )
        }

        )
    }
    return (
        <>
            {product && (
                <>
                    <h1 className='text-decoration-underline mt-3 '>Product Details</h1>
                    <div className='view-item pt-5'>
                        <div className='item'>
                            <img src={product.image} alt="" />
                        </div>
                        <div className="details">
                            <h4><span className='text-success'>Title:</span>{product.title}...</h4>
                            <h5> <span className='text-success'>Price:</span> ${product.price}</h5>
                            <button className='btn btn-danger' onClick={() => deleteProduct(product)}>Delete</button>

                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}

export default ViewProduct