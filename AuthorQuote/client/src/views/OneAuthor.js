import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const initialErrors = {
    name:""
}


const OneAuthor = props => {

    const { id } = props;
    const [ author, setAuthor] = useState({
        name:""
    });
    const [ errors, setErrors] = useState(initialErrors)

    useEffect(() => {
        axios.get(`https://localhost:8000/api/author/${id}`)
            .then(response => setAuthor(response.data.results))
            .catch(err => navigate('/'))
    },[id])


    return (
        <div className = "App">
            <button onClick = { () => navigate(`/write/${id}`)}> Add a Quote!</button>
            <table>
                    <thead>
                        <tr>
                            <th>
                                Quote   
                            </th>
                            <th>
                                Votes
                            </th>
                            <th>
                                Actions Available
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            author.quotes.map((quote, i)=>
                                <tr key={i}>
                                    <td>{author.quotes.quote}</td>
                                    <td>
                                        <button onClick={ () => navigate()}>Vote Up</button>
                                        <button onClick={ () => navigate()}>Vote Down</button>
                                        <button onClick={ () => navigate()}>Delete</button>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
            </table>
        </div>
    )
}

export default OneAuthor
