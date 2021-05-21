import { navigate } from '@reach/router';
import React from 'react'

const Form = props => {

    const { submitHandler, author, changeHandler, errors, action} = props;


    return (
        <form className = 'App' onSubmit = { (e) => submitHandler(e) }>
            <div>
            {errors.name  ?
                    <span>{errors.name}</span>
                    :
                    ""
            }
            <label htmlFor={ action }>{ action }:</label>
            <input type="text" name={ action } id="" onChange = { changeHandler } value={author.action}/>
            
            <input type="submit" value="Submit" />
            <input type="button" value="Cancel" onClick= { () => navigate("/")}/>
            </div>
        </form>
    )
}

export default Form
