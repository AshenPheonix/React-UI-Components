import React,{Component} from 'react';
import './Header.css';
import Thumbnail from './ImageThumbnail';
import Title from './HeaderTitle';
import Content from './HeaderContent';

export default class HeaderContainer extends Component {
    render() {
        return (
            <section className="head">
                <Thumbnail 
                    src={this.props.head.src}
                    alt={this.props.head.alt}
                />
                <section className="divider">
                    <Title 
                        title={this.props.head.title}
                        handle={this.props.head.handle}
                        date={this.props.head.date}
                    />
                    <Content
                        copy={this.props.head.copy}
                    />
                </section>
            </section>
        )
    }
}
