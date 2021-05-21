import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const AllAuthors = () => {

    const [authors, setAuthors] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(response => setAuthors(response.data.results))
            .catch(err => console.log(err))
    },[])


    return (
            <div className = "App">
                <table>
                    <thead>
                        <tr>
                            <th>
                                Author    
                            </th>
                            <th>
                                Actions Available
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                     authors.map((author, i) =>
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td>
                                <button onClick= {()=> navigate(`author/${author._id}`)}>View Quotes</button>
                                <button onClick= {()=> navigate(`author/${author._id}/edit`)}>Edit</button>
                            </td>
                        </tr>
                    )
                    }
                    </tbody>
            </table>
        </div>
        
    )
}

export default AllAuthors
