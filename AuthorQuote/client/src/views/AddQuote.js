import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from '../components/Form'
import { navigate } from '@reach/router'

const initialErrors = {
    quote: "",
    vote: 0,
}
const initialQuote = {
    quote: "",
    vote: 0,
}

const AddQuote = props => {

    const { id } = props;

    const [ quote, setQuote] = useState(initialQuote)
    const [ errors, setErrors] = useState(initialErrors)
    const [ author, setAuthor] =useState({
        name:"",
        quotes: [],
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(response => setAuthor(response.data.results))
            .catch(err => navigate('/'))
        },[id])
        
    const changeHandler = e => {
        const { name, value } = e.target;
        setQuote({...quote, [name]:value})
    } 

    const submitHandler = e => {
        e.preventDefault();
        console.log("Hello")
        axios.put(`http://localhost:8000/api/author/${id}/quote`, quote)
            .then(response => {
                const { message, results } = response.data
                if( message === "success"){
                    setAuthor(response.data.results)
                    setQuote(initialQuote)
                    setErrors(initialErrors)
                    navigate(`/author/${id}`)
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
            <h2>Provide a quote by {author.name}</h2>
            <form onSubmit = { submitHandler }>
                {errors.quote  ?
                        <span>{errors.quote}</span>
                        :
                        ""
                }
                <label htmlFor="quote">Quote:</label>
            <input type="text" name="quote" id="" onChange = { changeHandler } />
            <input type="submit" value="Submit" />
            <input type="button" value="Cancel" onClick= { () => navigate("/")}/>
            </form>
        </div>
    )
}

export default AddQuote
