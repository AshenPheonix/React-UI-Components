import React,{Component} from 'react';
import './Header.css';
import Thumbnail from './ImageThumbnail';
import Title from './HeaderTitle';
import Content from './HeaderContent';

export default class HeaderContainer extends Component {
    constructor(props) {
        super(props)
        if(!this.props.title)
            this.props.title='Lambda School'
        if(!this.props.handle)
            this.props.handle='@LambdaSchool'
        if(this.props.date)
            this.props.date=new Date('26 Jan')
        if(!this.props.src)
            this.props.src='https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png'
        if(!this.props.alt)
            this.props.alt='Lambda School Logo'
    }
    
    render() {
        return (
            <section className="head">
                <Thumbnail/>
                <Title/>
                <Content/>
            </section>
        )
    }
}
