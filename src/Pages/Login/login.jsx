import React from 'react';
import ReactDom from 'react-dom';
import { hashHistory } from 'react-router';


require('../../asset/css/icon.css');
require('./login.css');

import { Username, Password, Submit } from '../../Components';

class Login extends React.Component {
    constructor(prop){
        super(prop);
        this.state = {
            username: '',
            password: '',
            error: '',
            flag: true,
            stars: ''
        }
    }
    componentDidMount() {
    }

    // usernameInput(value) {
    //     let patten = /^[a-zA-Z]\w{0,10}$/;
    //     this.setState({ username: value })
    //     if (!patten.test(value) && value !== '') {
    //         this.setState({ error: '不能以数字开头哦!' })
    //     } else {
    //         this.setState({ error: "" })
    //     }
    // }

    // passwordInput(value) {
    //     this.setState({ password: value })
    // }

    // infoSubmit(e){
    //     this.validate(e)
    // }

    // validate(e){
    //     let username = this.state.username;
    //     let password = this.state.password;
    //     let storage = window.localStorage;
    //     if (username === "" || username == null || password === "" || password == null) {
    //         alert("用户名或密码不能为空哦~~")
    //     } else {
    //         storage.setItem("username", username);
    //         storage.setItem("password", password);
    //         alert(this.state.username);
    //     }
    //     if (username == 'gaogao' && password == '123') {
    //         hashHistory.push('/apilist')
    //     }
    //     e.preventDefault();
    // }


    render() {
        return (
            <div className="content">
                <div className="login">
                    <h3 className="title"></h3>
                    <form className="form" id="information">
                        {/* <div className="label_block">
                            <label for="select">
                                <select id="select">
                                    <option value="">请选择登录方式</option>
                                    <option value="">身份证号</option>
                                    <option value="">邮箱</option>
                                    <option value="">区划代码</option>
                                    <option value="">别名</option>
                                    <option value="">手机号</option>
                                </select>
                                <i className="arrow rt"></i>
                            </label>
                        </div> */}
                        <div className="label_block">
                            <label for="user">
                                <span>ID 号：</span>
                                <input type="text" id="user" name="loginName" value="" />
                                <i className="user rt"></i>
                            </label>
                        </div>
                        <div className="label_block">
                            <label for="password">
                                <span>密 码：</span>
                                <input type="password" id="password" name="password" value="" />
                                <i className="password rt"></i>
                            </label>
                        </div>
                        <div className="label_block relative">
                            <label for="proving">
                                <span>验 &nbsp;证&nbsp;码：</span>
                                <input type="text" id="proving" name="loginCode" value="" maxlength="4" />
                            </label>
                            <div className="proving text-center">
                                <span id="provingCode">0967</span>
                            </div>
                        </div>
                        <div className="overflow pass">
                            <label for="check" className="lt check_btn">
                                <input type="checkbox" id="check" />
                                <i className="no-margin"></i> 记住密码
                                </label>
                            <a href="#" className="rt forget_pass">忘记密码</a>
                        </div>
                        <div className="text-center login_btn">
                            <buttom id="login_btn">登录</buttom>
                        </div>
                        <div className="text-center account_btn">
                            <a href="javascript:;">没有账号？ 立即注册</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Login;