import React, { Component } from 'react';
import styled from 'styled-components';
//Data
import { dataContent } from '../data/dataWee';
//Component
import MainscreenLanguage from './MainscreenLanguage';
import WeeLeft from './WeeLeft';
import WeeRight from './WeeRight';

const MaincreenDetailStyled = styled.div`
    position: absolute;
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
    ul{
        display: flex;
        text-align: center;
        li{
            list-style: none;
            width: 30px;
            a{
                text-decoration: none; 
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

class MaincreenDetail extends Component {
    state = {
        slickSelected: dataContent[0],
        data: this.props.data,
        pathValue : '/en'
    }
    pathValueChange(value) {
        this.setState({pathValue: value});
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

    renderMenu(){
        return this.state.data.map((item, i) => {
            return (
                <MainscreenLanguage key = {i} data = {item} pathChange={this.pathValueChange.bind(this)}
                    isActive = {this.state.pathValue === item.key ? true : false}/>
                )
        })
    }
    render() {
        return (
            <MaincreenDetailStyled>
                <ul>
                    {this.renderMenu()}
                </ul>
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