import React, { Component } from 'react'
import {asdfkjsad as Action} from '../ButtonComponents/ActionButton';
import Display from '../DisplayComponents/CalculatorDisplay'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state={
            disp:0,
            action:'',

        }
    }
    
    render() {
        return (
            <section
                className="calc-body"
            >
                <Display 
                    out={this.state.disp}
                />
            </section>
        )
    }
}
