import React from 'react';
import ReactDom from 'react-dom';


class LoginValidate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value = ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e)
    }


    componentDidMount() {

    }

    render() {
        return (
            <div className="label_block">
                <label htmlFor={this.props.data.name}>
                    <span>{this.props.data.content}</span>
                    <input type={this.props.data.type} id={this.props.data.name} name={this.props.data.inputName} value={this.state.value} onChange={this.handleChange(Event)} />
                    <i className={"rt " + this.props.data.name} ></i>
                </label>
            </div>
        );
    }
}

export default LoginValidate;