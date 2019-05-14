import React, { Component } from 'react';
import styled from 'styled-components';
//Image
import ic_logo from './../images/wee_logo.svg';
import ic_email from './../images/ic_email.svg';
import btn_send from './../images/btn_send.svg';

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
            }
        }
    }
`

class WeeLeft extends Component {
    render() {
        return (
            <WeeLeftStyled>
                <div className = 'logo-wee'>
                    <img src={ic_logo} alt = 'ic_logo'/>
                </div>
                <h1>Transfer Money</h1>
                <div className = 'line'></div>
                <div className = 'line'></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                </p>
                <div className = 'contact'>
                    <p>{this.props.contact}</p>
                    <div className = 'search'>
                        <img src = {ic_email} alt = 'ic_email' />
                        <span>{this.props.mail}</span>
                        <div className = 'send'></div>
                    </div>
                </div>
            </WeeLeftStyled>
        );
    }
}

export default WeeLeft;