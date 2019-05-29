import React,{Component} from 'react';
import './Display.css';

export default class extends Component{
    render(){
        return(
            <section className="display">
                {this.props.out}
            </section>
        )
    }
}