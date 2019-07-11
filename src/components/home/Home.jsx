import React, { Component } from 'react'
import './Home.scss'

import Navbar from '../navbar/Navbar';
import Landing from '../landing/Landing';
import About from '../about/About'

import { Switch, Route } from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state ={
            page: 1,
            active: 'default'
        }
    }

    returnActiveTab = (tab) => {
        this.setState({active: tab});
    }

    setPage = (num) => {
        this.setState({page: num});
    }

    render() {

        switch (this.state.page) {
            case 1:
                return(<div><Landing setPage={() => this.setPage(2)}/></div>)
            case 2:
                return(
                    <div>
                        <Navbar version={2} returnActiveTab={this.returnActiveTab} />
                        <Switch>
                            <Route exact path='/about' component={About} />
                           
                        </Switch>
                    </div>
                );
        }
    }
}