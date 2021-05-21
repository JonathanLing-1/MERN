import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from '../components/Form'
import { navigate } from '@reach/router'

const initialErrors = {
    name:""
}

const NewAuthor = () => {

    const [author, setAuthor]= useState({
        name: ""
    })
    const [errors, setErrors]= useState(initialErrors);

    const changeHandler = e => {
        const { name, value } = e.target;
        setAuthor({...author, [name]:value})
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log("Hello")
        axios.post('http://localhost:8000/api/author/new', author)
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
            <Form author = { author } changeHandler= { changeHandler} submitHandler= {submitHandler} errors = {errors} ></Form>
        </div>
    )
}

export default NewAuthor
