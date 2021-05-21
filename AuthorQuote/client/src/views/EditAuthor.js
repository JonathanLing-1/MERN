import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import Form from "../components/Form"

const initialErrors = {
    name:""
}

const EditAuthor = props => {

    const { id } = props;
    const [ author, setAuthor] = useState({
        name:"",

    })
    const [ errors, setErrors ] = useState(initialErrors);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(response => setAuthor(response.data.results))
            .catch(err => navigate('/'))
    },[id])

    const changeHandler = e => {
        const { name, value } = e.target;
        setAuthor({...author, [name]:value})
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log("Hello")
        axios.put(`http://localhost:8000/api/author/${id}/update`, author)
            .then(response => {
                const { message, results } = response.data
                if( message === "success"){
                    navigate(`/author/${results._id}`)
                } else {
                    const newErrors = {...initialErrors};
                    for(const key in results.errors){
                        newErrors[key] = results.errors[key].message;
                    }
                    setErrors(newErrors);
                }
            })
    }

    return (
        <div>
            <h2>Edit Author</h2>
            <Form author = { author } changeHandler= { changeHandler} submitHandler= {submitHandler} errors = {errors} action = "name" ></Form>
        </div>
    )
}

export default EditAuthor
