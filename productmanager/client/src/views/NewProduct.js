import React, { useState } from 'react'
import axios from 'axios'
import ProductForm from "../components/ProductForm"
import { navigate } from '@reach/router'


const NewProduct = () => {

    const [ product, setProduct ]= useState({
        title: '',
        price: 0,
        description: '',
    })

    const changeHandler = e => {
        const { name, value} = e.target;
        setProduct({
            ...product,[name]:value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Hello")
        axios.post("http://localhost:8000/api/product/new", product)
        //in the post request you must pass the "item" to post/put/patch
            .then(response => {
                const { message, results } = response.data
                if( message === "success"){
                    navigate(`/product/${results._id}`)
                }
                // } else {

                // }
            })
    }


    return (
        <div>
            <h1>New Product</h1>
            <ProductForm product = {product} changeHandler = {changeHandler} submitHandler = {submitHandler} action= "Submit" />
        </div>
    )
}



export default NewProduct
