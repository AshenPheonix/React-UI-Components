import React, { Component } from 'react'
import './Card.css';
import Header from '../HeaderComponents/HeaderContainer'
import Banner from './CardBanner';
import Content from './CardContent';

export default class CardContainer extends Component {
    constructor(props){
        super(props)

        this.state={
            head:{
                src:this.props.src||'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png',
                alt:this.props.alt||'Lambda School Logo',
                title:this.props.title||'Lambda School',
                date:this.props.date||'26 Jan',
                handle:this.props.handle||'@LamdaSchool',
                copy:this.props.copy
            }
        }
    }
    render() {
        return (
            <div
                onClick={this.click}
                className='Card'
            >
                <Header
                    head={this.state.head}
                />
                <Banner
                    bannerSrc={this.props.bannerSrc||'https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png'}
                    bannerAlt={this.props.bannerAlt|| 'React Logo'}
                />
                <Content
                    copy={this.props.cardCopy}
                    cardHead={this.props.cardHead || ''}
                />
            </div>
        )
    }
    click(){
        window.location.assign('https://www.reactjs.org')
    }
}
