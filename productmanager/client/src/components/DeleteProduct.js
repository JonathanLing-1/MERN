import React from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const DeleteProduct = props => {
    const { id } = props;

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/products/${id}/delete`)
            .then(response => navigate('/'))
            .catch(err => navigate('/'))
    }
    return (
        <div>
            <input type="button" value="Delete" onClick={deleteHandler} />
        </div>
    )
}

export default DeleteProduct
