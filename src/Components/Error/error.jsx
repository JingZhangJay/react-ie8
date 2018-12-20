import React from 'react';
import ReactDom from 'react-dom';


class Error extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="model-box-error text-center absolute" ms-if="data.messageToggle">
                <div className="exit text-center absolute" ms-on-click="hiddenPrompt()">×</div>
                <p ms-text="data.message">信息错误</p>
            </div>
        );
    }
}

export default Error;