import React from 'react'
import { navigate } from "@reach/router"

const TruckForm = props => {

    const {submitHandler, truck, changeHandler, action, DeleteButton, errors} = props;

    return (
        <form onSubmit = { submitHandler}>
            <div className= "form-group row">
                {errors.name ?
                    <span>{errors.name}</span>
                    :
                    ""
                }
                <label htmlFor="name" className="col-sm-8">Name:</label>
                <input type="text" name="name" id=""  onChange = { changeHandler} value={ truck.name } />
            </div>
            <div className= "form-group row">
                {errors.style ?
                    <span>{errors.name}</span>
                    :
                    ""
                }
                <label htmlFor="style" className="col-sm-8">Style:</label>
                <input type="text" name="style" id="" onChange = { changeHandler} value={ truck.style }/>
            </div>
            <div className= "form-group row">
                {errors.description ?
                    <span>{errors.description}</span>
                    :
                    ""
                }
                <label htmlFor="description" className="col-sm-8">Description:</label>
                <textarea name="description" id="" cols="30" rows="10" onChange = { changeHandler} value={ truck.description }></textarea>
            </div>
            <div>
                { 
                DeleteButton ?
                DeleteButton
                :
                ""
                }
            <input type="button" value="Cancel" onClick= { () => navigate('/')} />
            <input type="button" value={ action } />

            </div>
        </form>
    )
}

export default TruckForm
