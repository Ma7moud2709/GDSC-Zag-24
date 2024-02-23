/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const navigate = useNavigate();


  const formSubmit = (e) => {
    e.preventDefault();
    {
      title && price && (


        fetch(`http://localhost:9000/products/`, {
          method: "POST",
          body: JSON.stringify({
            image: 'https://www.brandinitiative.ie/wp-content/uploads/2018/01/Product-Smaller.jpg',
            title,
            price
          })
        })
          .then((res) => {
            res.json()
            navigate("/products");
          })
      )
    }

  }
  return (
    <div>
      <form className='pt-5 w-50 m-auto ' onSubmit={formSubmit}>
        <div className="form-group">
          <label htmlFor="title ">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Product Title"
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="price ">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddProduct