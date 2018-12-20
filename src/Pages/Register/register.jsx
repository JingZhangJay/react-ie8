import React from 'react';
import ReactDom from 'react-dom';
import {Link} from "react-router"
import style from './register.css'
import {Model,RegisterValidate,Code,Message,Error,Success} from "../../Components"

class Register extends React.Component {
    componentDidMount() {

    }

    render() {
        var user={
            id:"user",
            content:"用户姓名：",
            name:"name",
        }
        var ID={
            id:"ID",
            content:"身份证号：",
            name:"IDNumber",
        }
        var mailbox={
            id:"mailbox",
            content:"邮  箱：",
            name:"email",
        }
        var code={
            id:"code",
            content:"区划代码：",
            name:"username",
        }
        var alias={
            id:"alias",
            content:"别  名：",
            name:"zoningCode",
        }
        var phone={
            id:"phone",
            content:"手 机 号：",
            name:"telephone",
        }
        var password={
            id:"password",
            content:"密  码：",
            name:"password",
        }
        var confirm={
            id:"confirm",
            content:"确认密码：",
            name:"password",
        }
        var registerCode={
            name:"registerCode"
        }
        return (
            <div className="content">
                <div className="login overflow">
                    <h3 className="title"></h3>
                    <div className="form overflow">
                        <form className="scrollbox" id="information">
                            <RegisterValidate data={user}/>
                            <RegisterValidate data={ID}/>
                            <RegisterValidate data={mailbox}/>
                            <RegisterValidate data={code}/>
                            <RegisterValidate data={alias}/>
                            <RegisterValidate data={phone}/>
                            <Message/>
                            <RegisterValidate data={password}/>
                            <RegisterValidate data={confirm}/>
                            <Code data={registerCode}/>
                        </form>
                        {/*// <!--滚动条  scrollBar  start-->*/}
                        <div id="scrollBar" onselectstart="return false"></div>
                        {/*// <!-- end -->*/}
                        {/*//*/}
                        {/*// <!--提示框  model—box -->*/}
                        {/*//*/}
                        {/*// <!--error-->*/}

                        <Error/>
                        {/*// <!-- success -->*/}
                        <Success/>

                    </div>
                    {/*// <!-- login-btn -->*/}
                    <div className="text-center login_btn">
                        <buttom id="register">注册</buttom>
                        <div className="text-center account_btn">
                            <Link to="/login">已有账户 立即登录</Link>
                        </div>
                    </div>
                </div>

                {/*// <!-- 弹出框,选择目标区划 -->*/}
                {/*<Model/>*/}
            </div>
        )
    }
}

export default Register;