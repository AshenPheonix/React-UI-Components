import React from 'react';
import './Button.css';

export default (props)=>{

    const addNum=(e)=>{
        props.sel(props.number)
    }

    let classes='button'
    if(props.long)
        classes+=' long'

    return (
        <button
            onClick={addNum}
            className={classes}
        >
            {props.number}
        </button>
    )
}