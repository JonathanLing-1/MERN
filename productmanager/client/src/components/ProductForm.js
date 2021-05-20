import React from 'react'

const ProductForm = props => {

    const { product, submitHandler, changeHandler, errors, action } = props;

    return (
        <div>
            <form onSubmit = { (e) => submitHandler(e) }>
                <div className = "App">
                <p>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" onChange={ changeHandler } value= {product.title}/>
                </p>
                <p>
                <label htmlFor="">Price</label>
                <input type="number" name="price" onChange={ changeHandler } value= {product.price} />
                </p>
                <p>
                <label htmlFor=""></label>
                <textarea name="description" id="" cols="30" rows="10" onChange={ changeHandler } value= {product.description}></textarea>
                </p>
                <input type="submit" value={ action } />
                {/* input button must be type submit for a form to actually submit, not the value */}
                </div>
            </form>
        </div>
    )
}

export default ProductForm
