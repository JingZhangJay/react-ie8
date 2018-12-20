import React from 'react';
import ReactDom from 'react-dom';


class RegisterValidate extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {

    }

    render() {
        let res=this.props.data.type=="password"?"password":"text";
        return (
            <div className="label_block">
                <label htmlFor={this.props.data.id}>
                    <span>{this.props.data.content}</span>
                    <input type={res} id={this.props.data.id} name={this.props.data.name} value=""/>
                    <i className={"rt "+this.props.data.id}></i>
                </label>
                {this.props.data.id=="alias"?"":<p>＊</p>}
            </div>


        );
    }
}

export default RegisterValidate;



