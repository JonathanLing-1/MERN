import React from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const DeleteButton = props => {
    const { id } = props;
    const deleteHandler = () => {
        axios.delete(`https://localhost:8000/api/trucks/${id}/delete`)
            .then(response => navigate('/'))
            .catch(err => navigate('/'))
    }
    return (
        <input type="button" value="Delete" onClick = {deleteHandler} />
    )
}

export default DeleteButton
