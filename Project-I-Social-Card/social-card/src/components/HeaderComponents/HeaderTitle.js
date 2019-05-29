import React,{Component} from 'react';
import './Header.css';

export default class HeaderTitle extends Component{
    render(){
        return(
            <section
                className="header"
            >
                <h5>
                    {this.props.title}
                </h5>
                <p>
                    {this.props.handle} - {this.props.date}
                </p>
            </section>
        )
    }
}