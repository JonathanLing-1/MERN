import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'

const Planet = props => {

    const { id } = props;

    const [ planet, setPlanet ] = useState({
        name: "",
        climate:"",
        terrain:"",
        surface_water:"",
        population:"",
    });
    
    useEffect(()=>{
        axiosPlanet()
    },[])
    
    const axiosPlanet = () => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => setPlanet(response.data))
            .catch(err => console.log(err));
    }



    return (

        <div>
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water:{ planet.surface_water>0 ? "True" : "False"}</p>
            <p>Population: {planet.population}</p>
        </div>
    )
}

export default Planet
