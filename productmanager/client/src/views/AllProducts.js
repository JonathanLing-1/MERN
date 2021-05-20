import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';




const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(response => setProducts(response.data.results))
            .catch(err => console.log(err));
    },[])

    return (
        <div className = "App">
            {
                products.map((product, i) =>
                <div key={i}>
                    <h4>{ product.title }</h4>
                    <p>Price: { product.price }</p>
                    <p>Description: { product.description }</p>
                    <div>
                        <button onClick={ () => navigate(`/product/${product}/edit`)}></button>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default AllProducts
