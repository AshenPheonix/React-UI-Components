import React, { Component } from 'react'
import './Card.css';

export default class CardBanner extends Component {
    render() {
        return (
            <div className="card-banner">
                <img 
                    src={this.props.bannerSrc}
                    alt={this.props.bannerAlt}
                />
            </div>
        )
    }
}
