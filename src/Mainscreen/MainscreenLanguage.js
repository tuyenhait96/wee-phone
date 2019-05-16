import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from "react-router-dom";

const BounceStyled = styled.li`
    opacity: ${props => props.isActive ? '1' : '0.7'};
    &:nth-child(2) {
        opacity: 1;
    }
`

class MainscreenLanguage extends Component {
    pathChange(value) {
        this.props.pathChange(value)
    }
    render() {
        return (
            <BounceStyled isActive = {this.props.isActive}
            onClick = {this.pathChange.bind(this, this.props.data.key)}>
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