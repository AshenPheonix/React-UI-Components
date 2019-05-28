import React, { Component } from 'react'
import './Calc.css'
import {asdfkjsad as Action} from '../ButtonComponents/ActionButton';
import Display from '../DisplayComponents/CalculatorDisplay'
import NumButton from '../ButtonComponents/NumberButton'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state={
            disp:0,
            action:'',
            history:[]
        }

        this.action=this.action.bind(this)
        this.addNum=this.addNum.bind(this)
    }
    
    render() {
        return (
            <section
                className="calc-body"
            >
                <Display 
                    out={this.state.disp}
                />
                
                <Action 
                    long="true"
                    act="clear"
                    symbol="Clear"
                    sel={this.action}
                />
                <Action
                    sel={this.action}
                    act="divide"
                    symbol="&divide;"
                />
                <NumButton
                    number='7'
                    sel={this.addNum}
                />
                <NumButton
                    number='8'
                    sel={this.addNum}
                />
                <NumButton
                    number='9'
                    sel={this.addNum}
                />
                <Action
                    sel={this.action}
                    act="multiply"
                    symbol="&times;"
                />
            </section>
        )
    }

    action(data){
        console.log(data)
    }
    addNum(num){
        console.log(num)
    }
}
