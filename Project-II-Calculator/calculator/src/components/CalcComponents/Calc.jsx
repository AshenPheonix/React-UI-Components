import React, { Component } from 'react'
import './Calc.css'
import {asdfkjsad as Action} from '../ButtonComponents/ActionButton';
import Display from '../DisplayComponents/CalculatorDisplay'
import NumButton from '../ButtonComponents/NumberButton'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state={
            disp:'0',
            action:[],
            history:[],
            empty:false
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
                <NumButton
                    number='4'
                    sel={this.addNum}
                />
                <NumButton
                    number='5'
                    sel={this.addNum}
                />
                <NumButton
                    number='6'
                    sel={this.addNum}
                />
                <Action
                    sel={this.action}
                    act="subtract"
                    symbol="&minus;"
                />
                <NumButton
                    number='1'
                    sel={this.addNum}
                />
                <NumButton
                    number='2'
                    sel={this.addNum}
                />
                <NumButton
                    number='3'
                    sel={this.addNum}
                />
                <Action
                    sel={this.action}
                    act="add"
                    symbol="+"
                />
                <NumButton
                    number='0'
                    sel={this.addNum}
                    long="true"
                />
                <Action
                    sel={this.action}
                    act="fin"
                    symbol="="
                />
            </section>
        )
    }

    action(data){
        if(data!=='fin' && data!=='clear'){
            let temp={history:this.state.history.map(i=>i), disp:'0',action:this.state.action.map(i=>i),empty:false}
            temp.history.push(this.state.disp)
            temp.action.push(data)
            this.setState(temp)
        }else if(data==='clear'){
            this.setState({
                disp:'0',
                action:[],
                history:[],
                empty:false
            })
        }
        else if(this.state.history.length===0)
                return
        else{
            let tempArray=this.state.history.map(i=>i)
            tempArray.push(this.state.disp)
            let ret = this.state.action.reduce((total,act,i,)=>{
                    switch(act){
                        case 'divide':
                            return Number(total)/Number(tempArray[i+1])
                            break;
                        case 'multiply':
                            return Number(total)*Number(tempArray[i+1])
                            break;
                        case 'add':
                            return Number(total)+Number(tempArray[i+1])
                            break;
                        case 'subtract':
                            return Number(total)-Number(tempArray[i+1])
                            break;
                        default:
                            console.error(`bad action name:: ${act}`);
                            return 'err'
                            break;
                    }
            },this.state.history[0])
            this.setState({history:[],action:[],disp:ret,empty:true})
        }
    }
    addNum(num){
        if(this.state.disp==='0' && num==='0')
            return;
        if(this.state.disp==='0' || this.state.empty){
                this.setState({disp:num,empty:false})
        }
        else{
            let temp=this.state.disp
            temp+=num
            this.setState({disp:temp})
        }
    }
}
