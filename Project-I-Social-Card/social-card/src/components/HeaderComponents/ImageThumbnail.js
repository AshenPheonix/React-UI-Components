import React,{Component} from 'react';
import './Header.css';

export default class ImageThumbnail extends Component {
    render() {
        return (
            <img
                src={this.props.src}
                alt={this.props.alt}
            />
        )
    }
}
