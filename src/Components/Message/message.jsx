import React from 'react';
import ReactDom from 'react-dom';


class Message extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="label_block">
                <label htmlFor="message">
                    <span>短信验证：</span>
                    <input type="text" id="message" name="telephoneCode" value=""/>
                </label>
                <input type="button" name="" id="telephoneCodeBtn" value="发送"/>
            </div>
        );
    }
}

export default Message;