import React, {Component} from 'react';
import './Header.css';

export default class HeaderContent extends Component {
    render() {
        return (
            <section>
                {this.props.copy}
            </section>
        )
    }
}
