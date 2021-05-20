import React, { useState, useEffect } from 'react'
import ProductForm from "../components/ProductForm"
import { navigate } from "@reach/router"
import axios from 'axios'


const EditProduct = props => {

    const { id } = props;
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description:'',
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => setProduct(response.data.results))
            .catch(err => navigate('/'))
    })


    const changeHandler = e => {
        const { name, value} = e.target;
        setProduct({
            ...product,[name]:value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}/update`, product)
            .then(response => {
                const { message, results } = response.data
                if( message == "success"){
                    navigate(`/product/${results._id}`)
                }
            })
    }

    return (
        <div>
            <h2>Edit Product</h2>
            <ProductForm
                product = { product }
                changeHandler = {changeHandler} 
                submitHandler = {submitHandler} 
                action = "Update"
            />
        </div>
    )
}

export default EditProduct
