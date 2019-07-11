import React, { Component } from 'react'
import './Navbar.scss';

import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            version: this.props.version,
            active: 'none'
        }
    }

    handleNavClick = (e) => {
        this.props.returnActiveTab(e);
        this.setState({active: e})
    }


    render() {

                return (
                    <div className='navBar'>
                        <Link exact to='/about' style={{ textDecoration: 'none', color: 'white' }}>
                            <div className={`navItem ${this.state.active == 'about' ? 'active': null}`} onClick={() => this.handleNavClick('about')}>
                            about
                            </div>
                        </Link>
                        <Link exact to='/skills' style={{ textDecoration: 'none', color: 'white' }}>
                            <div className={`navItem even ${this.state.active == 'skills' ? 'active' : null}`} onClick={() => this.handleNavClick('skills')}>
                                skills
                            </div>
                        </Link>
                        <Link exact to='/projects' style={{ textDecoration: 'none', color: 'white' }}>
                            <div className={`navItem ${this.state.active == 'projects' ? 'active' : null}`} onClick={() => this.handleNavClick('projects')}>
                                projects
                            </div>
                        </Link>
                        <Link exact to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
                            <div className={`navItem even ${this.state.active == 'contact' ? 'active' : null}`} onClick={() => this.handleNavClick('contact')}>
                                contact
                            </div>
                        </Link>
                    </div>
                )
        
    }
}