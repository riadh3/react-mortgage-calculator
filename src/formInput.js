import React from 'react'

const formInput =(props)=>{
    // console.log(props)
    return(
        <div className='form-input'>
                <label>{props.label}: </label>
                <input type='text'
                        value={props.value}
                        onChange={props.inputHandler}
                        name={props.name}
                        onFocus={props.clearInput}
                />
                <p className='error'>Please enter a valid number</p>
            </div>
    )
}
export default formInput