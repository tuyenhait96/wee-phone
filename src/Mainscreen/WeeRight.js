import React, { Component } from 'react';
import styled from 'styled-components';
//Image
import iphone from './../images/iphone.png'
const WeeRightStyled = styled.div`
    .img-phone{
        width: 294.3px;
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
`

class WeeRight extends Component {
    render() {
        return (
            <WeeRightStyled>
                <div className = 'img-phone'>
                    <img src = {iphone} alt= 'iphone'/>
                </div>
            </WeeRightStyled>
        );
    }
}

export default WeeRight;