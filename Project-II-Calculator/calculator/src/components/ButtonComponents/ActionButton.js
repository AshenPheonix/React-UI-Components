import React,{Component as C} from 'react';
import './Button.css';

export class asdfkjsad extends C{
    constructor(props) {
        super(props)
        this.action=this.action.bind(this)
    }
    
    render(){
        let classes='action-button button'
        if(this.props.long)
            classes+=' long clear'
        return(
            <button onClick={this.action} className={classes}>
                {this.props.symbol}
            </button>
        )
    }

    action(){
        this.props.sel(this.props.act)
    }
}