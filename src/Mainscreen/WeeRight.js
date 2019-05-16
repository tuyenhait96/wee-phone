import React, { Component } from 'react';
import styled from 'styled-components';
//Image
import iphone from './../images/iphone.png';
import img_defaut_connect from './../images/img_defaut_connect.jpg';

const WeeRightStyled = styled.div`
    position: relative;
    .img-phone{
        width: 294.3px;
        padding-top: 50px;
        padding: 50px 280.7px 0 0;
        img{
            max-width: 100%;
            max-height: 100%;
            margin-bottom: 55px;
        }
        .img_defaut_connect {
            width: 255px;
            height: 450.8px;
            background-image: url(${img_defaut_connect});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: absolute;
            top: 125px;
            left: 20px;
        }
    }
    span{
        font-family: UTMAvo;
        font-size: 14px;
        text-align: right;
        color: #ffffff;
        padding: 0 0 26px 58px;
    }
`

class WeeRight extends Component {
    render() {
        return (
            <WeeRightStyled>
                <div className = 'img-phone'>
                    <img src = {iphone} alt= 'iphone'/>
                    <div className= 'img_defaut_connect'></div>
                </div>
                <span>{this.props.copy}</span>
            </WeeRightStyled>
        );
    }
}

export default WeeRight;