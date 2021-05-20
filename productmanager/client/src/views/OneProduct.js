import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const OneProduct = props => {

    const { id } = props;
    const [product, setProduct] = useState({
        title:'',
        style:'',
        description: ''
    });

    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => setProduct(response.data.results))
            .catch(err => navigate('/'))
    },[id])



    return (
        <div>
            <h1>Product</h1>
            <h2>Title: { product.title }</h2>
            <h2>Price: { product.price }</h2>
            <h2>Description: { product.description }</h2>
        </div>
    )
}

export default OneProduct
