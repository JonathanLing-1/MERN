import { navigate } from '@reach/router';
import React from 'react'

const Form = props => {

    const { submitHandler, author, changeHandler, errors} = props;


    return (
        <form className = 'App' onSubmit = { (e) => submitHandler(e) }>
            <div>
            {errors.name ?
                    <span>{errors.name}</span>
                    :
                    ""
            }
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="" onChange = { changeHandler }value={ author.name}/>
            
            <input type="submit" value="Submit" />
            <button onClick= { () => navigate("/")}>Cancel</button>
            </div>
        </form>
    )
}

export default Form
