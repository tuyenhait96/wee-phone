import React, { Component } from 'react';
import styled from 'styled-components';
//Data
import { dataContent, menu } from '../data/dataWee';
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
    left: 220px;
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
    state = {
        slickSelected: dataContent[0],
        // pathActive: window.location.pathname,
        pathActive: window.location.pathname==='/'?'/en':window.location.pathname,
        data: this.props.data
    }
    selectContent(content) {
        console.log('contentDetail from children => parent:', content)
        this.setState({
            slickSelected: content
        });
    }
    componentWillReceiveProps(nextProps) {
        console.log('nextProps Detail', nextProps)
        this.setState({
            slickSelected: nextProps.slickSelected
        });
    }
    onClickMainMenu(pathActive) {
        this.setState({pathActive});
    }
    renderMenu(){
        return this.state.data.map((item, i) => {
            return <MainscreenLanguage data ={item}/>
        })
    }
    render() {
        return (
            <MaincreenDetailStyled>
                <MainscreenLanguage 
                    onClickMainMenu = {this.onClickMainMenu.bind(this)}
                    pathActive = {this.state.pathActive} 
                    data = {menu}/>
                <div className = 'wee-container'>
                    <WeeLeft 
                        contact = 'contact us' 
                        mail = 'hello@wee.vn'
                        slickSelected = {this.state.slickSelected}
                        selectContent = {this.selectContent.bind(this)}
                        data = {dataContent}
                    />
                    <WeeRight copy = 'Copyright © 2018 - wee.vn'/>
                </div>
            </MaincreenDetailStyled>
        );
    }
}

export default MaincreenDetail;