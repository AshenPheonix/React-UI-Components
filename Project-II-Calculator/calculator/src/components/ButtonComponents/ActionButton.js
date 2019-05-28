import React,{Component as C} from 'react';
import './Button.css';

export class asdfkjsad extends C{
    render(){
        let classes='styled-button'
        if(this.props.long)
            classes+=' long'
        return(
            <button onClick={this.props.sel(this.props.act)} className={classes}>
                {this.props.symbol}
            </button>
        )
    }
}