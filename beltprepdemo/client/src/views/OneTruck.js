import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'


const initialReview =  {
    name: '',
    rating: 3,
    review: '',
}
const initialErrors = {
    name: '',
    rating: "",
    review: "",
}

const OneTruck = props => {

    const { id } = props;
    const [truck, setTruck] = useState({
        name:'',
        style: '',
        description: '',
        reviews: [],
    });
    const [review, setReview] = useState(initialReview)
    const [errors, setErrors] = useState(initialErrors)

    useEffect = (() => {
        axios.get(`http://localhost:8000/api/trucks/${id}`)
            .then( response => setTruck(response.data.results))
            .catch(err => navigate('/'))
    }, [id])

    const changeHandler = e => {
        const {name , value } = e.target;

        setReview({
            ...review,
            [name]:value,
        })

    }

    const submitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/trucks/${id}/review`, review)
        .then(response => {
            const { message, results } = response.data
            if( message === "success"){
                setTruck(response.data.results)
                setReview(initialReview)
                setErrors(initialErrors)
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
            <h2>{truck.name}</h2>
            <p>Style: {truck.style}</p>
            <p>Description: {truck.description}</p>
            <p>Average Rating:{
                truck.reviews.length === 0?
                0
                :
                truck.reviews.map(rev => rev.rating).reduce((sum, rating)=> sum + rating) / truck.reviews.length
                }stars 
            </p>
            <div>
                {
                    truck.reviews.map((review, i) =>
                        <div key={i}>
                            <p>{review.name}</p>
                            <p>Review: {review.review}</p>
                            <p>Rating: {review.rating} starts</p>
                        </div>
                    )
                }
            </div>
            <div>
                <form onSubmit = {submitHandler}>
                    <p>
                    {errors.name ?
                    <span>{errors.name}</span>
                    :
                    ""
                    }
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="" onChange = {changeHandler} />
                    </p>
                    <p>
                    {errors.review ?
                    <span>{errors.review}</span>
                    :
                    ""
                    }
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="" cols="30" rows="10" onChange = {changeHandler}></textarea>
                    </p>
                    <p>
                        {errors.rating ?
                        <span>{errors.rating}</span>
                        :
                        ""
                        }
                        <label htmlFor="rating">Rating:</label>
                        <select name="rating" id="" value={review.rating} onChange ={changeHandler}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <p>
                        <input type="button" value="Cancel" onClick = { () => setReview(initialReview)} />
                        <input type="submit" value="Submit" />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default OneTruck
