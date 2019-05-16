import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from "react-router-dom";

const BounceStyled = styled.li`
    opacity: ${props => props.isActive ? '1' : '0.7'};
`

class MainscreenLanguage extends Component {
    pathChange(value) {
        this.props.pathChange(value)
    }
    render() {
        return (
            <BounceStyled isActive = {this.props.isActive}
            onClick = {this.pathChange.bind(this, this.props.data.key)}>
                {/* <Switch>
                    <Route exact path = '/en' render = {() => 
                        <div className = 'main-screen-container'>
                             <li>EN</li>
                             <li>|</li>

                        </div>
                    }>
                    </Route>
                    <Route exact path = '/vi' render = {() => 
                        <div className = 'main-screen-container'>
                             <li>VI</li>
                        </div>
                    }>
                    </Route>
                </Switch> */}
                <Router>
                    <Link to={this.props.data.key}>
                        {this.props.data.title}
                    </Link>
                </Router>
            </BounceStyled>
        );
    }
}

export default MainscreenLanguage;