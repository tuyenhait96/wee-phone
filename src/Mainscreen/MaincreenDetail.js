import React, { Component } from 'react';
import styled from 'styled-components';
//Component
import MainscreenLanguage from './MainscreenLanguage';
import WeeLeft from './WeeLeft';
import WeeRight from './WeeRight';

const MaincreenDetailStyled = styled.div`
    position: absolute;
    ${'' /* background: red; */}
    ${'' /* width: 51.7%; */}
    min-width: 745px;
    height: auto;
    top: 30px;
    left: 280.7px;
    .wee-container{
        display: flex;
    }
    .logo-wee{
        width: 202.4px;
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
        
`

class MaincreenDetail extends Component {
    render() {
        return (
            <MaincreenDetailStyled>
                <MainscreenLanguage />
                <div className = 'wee-container'>
                    <WeeLeft contact = 'contact us' mail = 'hello@wee.vn'/>
                    <WeeRight/>
                </div>
            </MaincreenDetailStyled>
        );
    }
}

export default MaincreenDetail;