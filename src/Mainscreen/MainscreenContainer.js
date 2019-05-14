import React, { Component } from 'react';
import styled from 'styled-components';
//Video
import bg_video from './../video/bg_video.mp4';
import { bg_color } from '../data/dataWee';
import MaincreenDetail from './MaincreenDetail';
const MainscreenContainerStyled = styled.div`
    video{
        margin: auto;
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 0%;
        transform: translate(0%, -50%);
        visibility: visible;
        opacity: 1;
        width: 100%;
        height: auto;
    }
    #bg-change{
        position: absolute;
        width: 100%;
        min-width: 100%;
        min-height: 102%;
        opacity: 0.74;
        background-image: linear-gradient(to top, #00cfff, #005cec, #005bec);
    }
    
`

class MainscreenContainer extends Component {
    state = {
        colors: bg_color,
    }
    componentDidMount() {
       this.colorInterval = setInterval(() => {
           document.getElementById('bg-change').style.backgroundImage = this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
       }, 5000); 
    }
    
    render() {
        return (
            <MainscreenContainerStyled>
                <video className='VideoTag' autoPlay loop muted>
                    <source src={bg_video} type='video/mp4'/>
                </video>
                <div id ='bg-change'></div>
                <MaincreenDetail/>
            </MainscreenContainerStyled>
        );
    }
}

export default MainscreenContainer;