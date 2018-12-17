import {} from "../scss/GlobalCSS"
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRedirect, IndexRoute, Link, hashHistory  } from 'react-router'
import PageIndex from "./Pages/Index"
import PageDemos from "./Pages/Demos"
import {Navigation} from "./Components"
import {PageInbox, PageInboxMessage} from "./Pages/Inbox"

import Login from "./Pages/Login/login"

class App extends React.Component{
    render() {
        return (
            <div style={{width:"100%",height:"100%"}}>
                {/* <Navigation /> */}
                <div className="main" style={{width:"100%",height:"100%"}}>{this.props.children}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            {/*<IndexRedirect to="/index" />*/}
            {/*<Route path="index" component={PageIndex} />*/}
            {/* <Route path="demo" component={PageDemos} />
            <Route path="inbox" component={PageInbox}>
                <Route path="messages/:id" component={PageInboxMessage} />
            </Route> */}

            <Route path='/login' component={Login}/>
            <IndexRedirect to='/login'/>
        </Route>
    </Router>,
    document.getElementById("app")
)