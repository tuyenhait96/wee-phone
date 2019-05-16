import React, { Component } from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

//Image
import ic_email from './../images/ic_email.svg';
import btn_send from './../images/btn_send.svg';

const MainscreenTransferContentStyled = styled.div`
    p{
        font-family: UTMAvo;
        font-size: 14px;
        color: #ffffff;
    }
    .contact {
        padding-top: 26px;
        p{
            font-family: SVN-RajdhaniBold;
            font-size: 16px;
            font-weight: bold;
            color: #ffffff;
            text-transform: uppercase;
            padding-bottom: 11px;
        }
        .search {
            width: 200px;
            height: 36px;
            line-height: 36px;
            text-indent: 16px;
            background-color: #ffffff;  
            border-radius: 22.5px;
            position: relative;
            span {
                font-family: UTMAvo;
                font-size: 14px;
                color: #000720;
                padding-left: 21px;
            }
            .send{
                width: 30px;
                height: 30px;
                background-image:url(${btn_send});
                background-repeat:no-repeat;
                -webkit-appearance: none;
                position: absolute;
                top: 3px;
                right: 3px;
                cursor: pointer;
            }
        }
    }
`

class MainscreenTransferContent extends Component {
    state = {
        slickSelected: this.props.slickSelected
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({
            slickSelected: nextProps.slickSelected
        });
    }
    renderContent() {
        return this.state.slickSelected.inform.map((item, i) => {
            return (
                <div key = {i}>
                    {parse(`${item.content}`)}
                    <div className = 'contact'>
                        <p>{this.props.contact}</p>
                        <div className = 'search'>
                            <img src = {ic_email} alt = 'ic_email' />
                            <span>{this.props.mail}</span>
                            <div className = 'send'></div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <MainscreenTransferContentStyled>
                {this.renderContent()}
            </MainscreenTransferContentStyled>
        );
    }
}

export default MainscreenTransferContent;