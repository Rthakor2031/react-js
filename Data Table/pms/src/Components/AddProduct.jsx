import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddProduct = () => {
  const [productData, setProductData] = useState({
    image: '',
    title: '',
    price: '',
    category: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProductData({...productData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/Product', productData)
      .then(response => {
        alert('Product Added Successfully')
        console.log(response.data)
        setProductData({
          image: '',
          title: '',
          price: '',
          category: '',
          description: ''
        })
      })
      .catch(err => console.log(err))
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Add Product</h2><br />
      <form onSubmit={handleSubmit}>
        <input type="text" name="image" placeholder="Enter image URL" value={productData.image} onChange={handleChange} /><br /><br />
        <input type="text" name="title" placeholder="Enter Product Title" value={productData.title} onChange={handleChange} /><br /><br />
        <input type="text" name="price" placeholder="Enter Product Price" value={productData.price} onChange={handleChange} /><br /><br />
        <input type="text" name="category" placeholder="Enter Product Category" value={productData.category} onChange={handleChange} /><br /><br />
        <input type="text" name="description" placeholder="Enter Product Description" value={productData.description} onChange={handleChange} /><br /><br />

        <div style={{ display: "flex", justifyContent: "space-evenly", width: "25%", margin: "auto" }}>
          <button type="submit">ADD-PRODUCT</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
