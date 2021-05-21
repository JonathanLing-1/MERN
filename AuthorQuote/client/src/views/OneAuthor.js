import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import DeleteButton from '../components/DeleteButton'

const initialErrors = {
    name:""
}


const OneAuthor = props => {

    const { id } = props;
    const [ author, setAuthor] = useState({
        name:"",
        quotes: [],
    });
    const [ errors, setErrors] = useState(initialErrors)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(response => setAuthor(response.data.results))
            .catch(err => navigate('/'))
    },[id])





    return (
        <div className = "App">
            <button onClick = { () => navigate(`/write/${id}`)}> Add a Quote!</button>
            <h2>Quotes by {author.name}</h2>
            <h5>Delete Author:<DeleteButton id = {id}/> </h5>
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
                                    <td>{quote.quote}</td>
                                    <td>{quote.votes}</td>
                                    <td>
                                        <button onClick={ (e) => navigate()}>Vote Up</button>
                                        <button onClick={ (e) => navigate()}>Vote Down</button>
                                        <DeleteButton id = {id}/>
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
