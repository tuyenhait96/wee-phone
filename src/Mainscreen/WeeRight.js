import React, { Component } from 'react';
import styled from 'styled-components';
//Image
import iphone from './../images/iphone.png'
const WeeRightStyled = styled.div`
    .img-phone{
        width: 294.3px;
        padding-top: 50px;
        img{
            max-width: 100%;
            max-height: 100%;
            margin-bottom: 55px;
        }
    }
    span{
        font-family: UTMAvo;
        font-size: 14px;
        text-align: right;
        color: #ffffff;
        ${'' /* margin-left: 58px; */}
        margin-bottom: 26px;
    }
`

class WeeRight extends Component {
    render() {
        return (
            <WeeRightStyled>
                <div className = 'img-phone'>
                    <img src = {iphone} alt= 'iphone'/>
                </div>
                <span>{this.props.copy}</span>
            </WeeRightStyled>
        );
    }
}

export default WeeRight;