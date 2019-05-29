import React, { Component } from 'react'
import {FaRegComment} from 'react-icons/fa'
import {FaRegHeart} from 'react-icons/fa'
import {FaSync} from 'react-icons/fa'
import {FaRegEnvelope} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import './Footer.css'

export default class Footer extends Component {
    constructor(props){
        super(props)
        this.state={
            comments:0,
            like:0,
            retweet:0,
            email:0
        }

        this.comment=this.comment.bind(this)
        this.like=this.like.bind(this)
        this.retweet=this.retweet.bind(this)
        this.email=this.email.bind(this)
    }
    render() {
        return (
            <IconContext.Provider
                value={{}}
            >

                <div className="foot">
                    <span
                        onClick={this.comment}
                    >
                        <FaRegComment /> {this.state.comments}
                    </span>
                    <span
                        onClick={this.like}
                    >
                        <FaRegHeart/> {this.state.like}
                    </span>
                    <span
                        onClick={this.retweet}
                    >
                        <FaSync/> {this.state.retweet}     
                    </span>
                    <span
                        onClick={this.email}
                    >
                        <FaRegEnvelope /> {this.state.email}
                    </span>
                </div>
            </IconContext.Provider>
        )
    }
    comment(e){
        let temp=this.state.comments+1
        this.setState({comments:temp})
    }
    like(e){
        let temp=this.state.like+1
        this.setState({like:temp})
    }
    retweet(e){
        let temp=this.state.retweet+1
        this.setState({retweet:temp})
    }
    email(e){
        let temp=this.state.email+1
        this.setState({email:temp})
    }
}
