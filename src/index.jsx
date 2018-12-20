import {} from "../scss/GlobalCSS"
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRedirect, IndexRoute, Link, hashHistory  } from 'react-router'

import Login from "./Pages/Login/login"
import Register from "./Pages/Register/register";

import axios from "axios";

axios.defaults.baseURL = `http://172.30.3.159:7331`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

class App extends React.Component{
    render() {
        return (
            <div style={{width:"100%",height:"100%"}}>
                <div className="main" style={{width:"100%",height:"100%"}}>{this.props.children}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>

            {/*<Route path="inbox" component={PageInbox}>*/}
                {/*<Route path="messages/:id" component={PageInboxMessage} />*/}
            {/*</Route> *!/*/}

            <Route path='/login' component={Login}/>
            <Router path='/register' component={Register}/>
            <IndexRedirect to='/login'/>
        </Route>
    </Router>,
    document.getElementById("app")
)