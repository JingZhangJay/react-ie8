import React from 'react';
import ReactDom from 'react-dom';
import {getVerificationCode} from '../../Service/Login/login'


class Code extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            code: ''
        }
    }
    async componentDidMount() {
        var code = await getVerificationCode()
        this.setState({code:code});
    }

    render() {
        return (
            <div className="label_block relative">
                <label htmlFor="proving">
                    <span>验 &nbsp;证&nbsp;码：</span>
                    <input type="text" id="proving" name={this.props.data.name} value="" maxLength="4"/>
                </label>
                <div className="proving text-center">
                    <span id="provingCode">{this.state.code}</span>
                </div>
            </div>
        );
    }
}

export default Code;