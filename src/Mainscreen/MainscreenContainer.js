import React, { Component } from 'react';
import styled from 'styled-components';
//Video
import bg_video from './../video/bg_video.mp4';
import { bg_color, menu } from '../data/dataWee';
import MaincreenDetail from './MaincreenDetail';
const MainscreenContainerStyled = styled.div`
    video{
        position: fixed;
        right: 0;
        top: 0;
        min-width: 100%;
        min-height: 100%;
        ${'' /* width: auto;
        height: auto; */}
        z-index: -100;
    }
    #bg-change{
        opacity: 0.74;
        background-image: linear-gradient(to top, #00cfff, #005cec, #005bec);
        position: fixed;
        right: 0;
        top: 0;
        min-width: 100%;
        min-height: 100%;
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
                    <source src={bg_video} type='video/mp4' width = '100%'/>
                </video>
                {/* <div className ='a'></div> */}
                <div id ='bg-change'></div>
                <MaincreenDetail data = {menu}/>
            </MainscreenContainerStyled>
        );
    }
}

export default MainscreenContainer;