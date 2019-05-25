import React, { Component } from 'react'
import './Card.css';

export default class CardContent extends Component {
    render() {
        return (
            <section>
                <h3>
                    {this.props.cardHead}
                </h3>
                {this.props.copy}
                <p className="small">
                    {this.props.tiny}
                </p>
            </section>
        )
    }
}
