import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import "../style/form.css"


import ListOfCommits from "./ListOfCommits";
// import data from 'C:\\Users\\User\\Desktop\\react_home\\praktika\\srcjsn';
// import data from "../jsn.json"
import {Link} from 'react-router-dom'
import "../style/wrap.css"
//
// import ProjectInfo from './ProjectInfo';
// import TakeLink from "./TakeLink";
// import React, {Component} from "react";
// import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import axios from 'axios';
import file from '../jsn'


function httpGet(theUrl, link, method) {
    var xmlHttp = new XMLHttpRequest();
    if (method == null) {
        xmlHttp.open("GET", theUrl + link, false);


    } else {
        var params = "link=" + link + "&crawler=" + method;
        xmlHttp.open("GET", theUrl + "?" + params, false);

    }
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <h1 className="display-3 text-center">Aggregator</h1>
                    <h1 className="display-4 text-center">Made by students from ITMO university</h1>
                </div>
                <Switch>
                    <Route exact path='/' component={TakeLink}/>
                    <Route path='/result' component={ProjectInfo}/>
                </Switch>
                {/*<ProjectInfo data = {data} />*/}

            </div>)

    }

}

var data;

class TakeLink extends Component {


    constructor(props) {
        super(props)
        this.state = {
            value: '',
            crawler: 'Java'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlerCrawler = this.handlerCrawler.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handlerCrawler(event) {
        this.setState({crawler: event.target.value});
        // alert(this.state.crawler);

    }


    componentDidMount() {
    }

    handleSubmit(event) {
        event.preventDefault();

        data = JSON.parse(httpGet('http://localhost:8080/takeLink/', this.state.value, this.state.crawler));
        // data = JSON.parse(httpGet('http://localhost:8080/project/', 6369117));
        alert(JSON.stringify(data));
        var fs = require('browserify-fs');
        fs.writeFile('../jsn.json', JSON.stringify(data), function () {
            fs.readFile('../jsn.json', 'utf-8', function (err, data) {
                console.log(data);
            });
        });


        this.setState({redirect: true});


    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/result"/>;
        }
        return (
            <div style={{textAlign: "center"}}>
                <h1>In progress..</h1>
                <Link to='/result'> Test Result</Link>
                {/*<button className='btn-primary' onClick={this.handleClick}>Send Link</button>*/}

                <form className="from" onSubmit={this.handleSubmit}>

                    <label>
                        Input GitLab link:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Choose programming language
                        <select onChange={this.handlerCrawler}>
                            <option selected value="Java">Java</option>
                            <option value="C#">C#</option>
                        </select>
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Send Link"/>
                </form>

            </div>

        )
    }


}

var textalign = {
    textAlign: "center"
};
var link = {
    fontSize: "20px"
};

class ProjectInfo extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {/*<h2 >Current project info</h2>*/}
                    <h2 style={textalign}>{data.name}</h2>
                    <Link to='/'> Return</Link>
                </div>
                <code>{img()}</code>
                <div style={textalign} className="card-body card-text">
                    {/*<h4 className="">Name: {data.name}</h4>*/}
                    <h2>Description</h2>
                    <h4>{data.description}</h4>
                    <a style={link} href={data.web_url}>{data.web_url}</a>
                    {/*<h4>avatar_url: {data.avatar_url}</h4>*/}

                    <div style={{margin: "15px 0"}}><h4>Project is created: {data.created_at.substr(0, 10)}</h4></div>
                    <ListOfCommits commits={data.commits}/>
                </div>

            </div>

        )
    }
}

function img() {
    if (data.avatar_url == "" || data.avatar_url == null)

        return null;
    else

        return <div style={{textAlign: "center"}}><img src={data.avatar_url}></img></div>;
}


export default App