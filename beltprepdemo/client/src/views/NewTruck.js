import React from 'react'
import TruckForm from "../components/TruckForm"
import { useState } from "react"
import { navigate } from "@reach/router"
import axios from 'axios'

const initialErrors = {
    name: '',
    style: '',
    description: '',
}

const NewTruck = () => {

    const [truck, setTruck] = useState({
        name:'',
        style: '',
        description: '',
    });

    const [errors, setErrors] = useState(initialErrors);


    const changeHandler = e => {
        const { name, value } = e.target;
        setTruck({...truck,[name]:value})
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.post('https://localhost:8000/api/trucks')
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
            <TruckForm  truck={truck} changeHandler = {changeHandler} submitHandler = {submitHandler} errors= {errors} action ="Submit"></TruckForm>
        </div>
    )
}

export default NewTruck
