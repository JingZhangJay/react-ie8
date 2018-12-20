import React from 'react';
import ReactDom from 'react-dom';
import { hashHistory ,Link} from 'react-router';
import { LoginValidate,Code } from '../../Components/LoginValidate';



require('../../asset/css/icon.css');
require('./login.css');



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

    render() {
        //传入子组件参数
        var user={
            name:"user",
            content:"账 号：",
            type:"text",
            inputName:"loginName"
        }
        var password={
            name:"password",
            content:"密 码：",
            type:"password",
            inputName:"password"
        }
        var loginCode={
            name:"loginCode"
        }

        return (
            <div className="content">
                <div className="login">
                    <h3 className="title"></h3>
                    <form className="form" id="information">
                        {/* 登录用户 */}
                        <LoginValidate data={user}/>

                        {/* 密码 */}
                        <LoginValidate data={password}/>

                        {/* 登录验证码 */}
                        <Code data={loginCode}/>

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
                            <Link to="/register">没有账号？ 立即注册</Link>
                        </div>
                    </form>
                </div>
            </div>  
        )
    }

}

export default Login;