import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from "react-router-dom";

const BounceStyled= styled.div`
    ul{
        display: flex;
        text-align: center;
        li{
            list-style: none;
            width: 30px;
            a{
                text-decoration: none; 
                ${'' /* opacity: 0.5; */}
                font-family: UTMAvoBold;
                font-size: 14px;
                font-weight: bold;
                text-align: center;
                color: #ffffff;
            }
            &:nth-child(2){
                width: 16px;
            }
        }
    }
`
class MainscreenLanguage extends Component {
    render() {
        return (
            <BounceStyled>
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
                    <ul>
                        <li>
                            <Link to="/en">EN</Link>
                        </li>
                        <li>
                            <Link to="/">|</Link>
                        </li>
                        <li>
                            <Link to="/vi">VI</Link>
                        </li>
                    </ul>
                </Router>
            </BounceStyled>
        );
    }
}

export default MainscreenLanguage;