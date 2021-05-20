import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router'

const AllTrucks = () => {
    const [trucks, setTrucks] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:8000/api/trucks')
            .then(response => setTrucks(response.data.results))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            {
                trucks.map((truck, i) =>
                    <div key = {i}>
                        <h4>{truck.name}</h4>
                        <p>Style: {truck.style}</p>
                        <p>Average Rating:{
                            truck.reviews.length === 0?
                            0
                            :
                            truck.reviews.map(rev => rev.rating).reduce((sum, rating)=> sum + rating) / truck.reviews.length
                            
                        }stars 
                        </p>
                        <div>
                            <button onClick={ () => navigate(`/truck/${truck._id}/edit`)}>Edit</button>
                            <button onClick={ () => navigate(`/truck/${truck._id}`)}>Review</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AllTrucks
