import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { useState , useEffect } from 'react';

const People = props => {

    const { id } = props;

    const [person, setPerson] = useState({
        name:"",
        height: "",
        mass:"",
        hair_color:"",
        skin_color:"",
    })

    const axiosPerson = () => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => setPerson(response.data))
            .catch(err => console.log(err));
    }
    
    useEffect(()=> {
        axiosPerson()
    },[id])




    return (
        
        <div>
            <h2>{person.name}</h2>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color:{person.skin_color}</p>
        </div>
    )
}

export default People
