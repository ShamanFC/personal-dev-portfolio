import React, { Component } from 'react'
import './Landing.scss'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    goInside = () => {
        this.props.setPage(2)
    }

    render() {
        return (
            <div>
                <h1 className='title'>michael eckstine</h1>
               <div className='graphic' onClick={this.goInside}></div>
            </div>
        )
    }
}
