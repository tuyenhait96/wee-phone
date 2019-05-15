import React, { Component } from 'react';
import styled from 'styled-components';
//Image
import ic_logo from './../images/wee_logo.svg';
//Component
import MainscreenTransferContent from './MainscreenTransferContent';

const WeeLeftStyled = styled.div`
    padding: 59px 136px 0 0;
    min-width: 509px;
    h1{
        font-family: UTMAvo;
        font-size: 50px;
        color: #ffffff;
    }
    .line{
        width: 20px;
        height: 5px;
        border-radius: 2.5px;
        background-color: #ffffff;
        display: inline-block;
        margin: 26px 10px 32px 0;
        cursor: pointer;
    }
    
`

class WeeLeft extends Component {
    state = {
        slickSelected: this.props.slickSelected,
        data: this.props.data
    }

    onShowContent(content) {
        this.props.selectContent(content)
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    //     this.setState({
    //         slickSelected: nextProps.slickSelected
    //     });
    // }
    componentWillReceiveProps(nextProps) {
        
        console.log(nextProps)
         this.setState({
            slickSelected: nextProps.slickSelected
        });
    }
    render() {
        return (
            <WeeLeftStyled>
                <div className = 'logo-wee'>
                    <img src={ic_logo} alt = 'ic_logo'/>
                </div>
                {
                    this.state.data.map((item, i) => {
                        return (
                            <div className = 'line' 
                                key={i}  
                                onClick = {this.onShowContent.bind(this, item)}
                                style ={{opacity: this.state.slickSelected.name === item.name  ? '1' : '0.7'}}>
                            </div>
                        )
                    })
                }
                <MainscreenTransferContent mail = {this.props.mail} slickSelected ={this.state.slickSelected}/> 
            </WeeLeftStyled>
        );
    }
}

export default WeeLeft;