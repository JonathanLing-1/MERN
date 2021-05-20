import React from 'react'
import { useState, useEffect } from 'react';
import TruckForm from "../components/TruckForm"
import { navigate } from "@reach/router"
import axios from 'axios'
import DeleteButton from "../components/DeleteButton";

const initialErrors = {
    name: '',
    style: '',
    description: '',
}

const EditTruck = props => {

    const { id } = props;
    const [truck, setTruck] = useState({
        name:'',
        style: '',
        description: '',
    });

    const [errors, setErrors] = useState(initialErrors);

    useEffect(()=>{
        axios.get(`https://localhost:8000/api/trucks/${id}`)
            .then(response => setTruck(response.data.results))
            .catch(err => navigate('/'));
    },[])

    const changeHandler = e => {
        const { name, value } = e.target;
        setTruck({
            ...truck,
            [name]:value
        })
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.put(`https://localhost:8000/api/trucks/${id}/update`, truck)
            .then(response => {
                const { message, results } = response.data
                if( message === "success"){
                    navigate(`/truck/${results._id}`)
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
            <h2>New Food Truck</h2>
            <TruckForm  
                truck={truck} 
                changeHandler = {changeHandler} 
                submitHandler = {submitHandler} 
                errors= {errors} 
                action ="Update"
                DeleteButton = { <DeleteButton id = {id}/> }
                >
            </TruckForm>
            
        </div>
    )
}

export default EditTruck
