import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import file from '../jsn'
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


    componentDidMount(){
        var fs = require('browserify-fs');

        fs.readFile('../jsn.json', 'utf-8', function(err, data) {
            console.log(data);
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        function httpGet(theUrl, link, method) {
            var xmlHttp = new XMLHttpRequest();
            var params = "link=" + link + "&crawler=" + method;
            xmlHttp.open("GET", theUrl + "?" + params, false);
            xmlHttp.send(null);
            return xmlHttp.responseText;
        }

        // var data;
        // axios.get('http://localhost:8080/takeLink/', {params: {link: this.state.value, crawler: this.state.crawler}})
        //     .then(response => alert(JSON.parse(JSON.stringify(response.data))).id);
        var data = JSON.parse(httpGet('http://localhost:8080/takeLink/', this.state.value, this.state.crawler));
        var fs = require('browserify-fs');
        fs.writeFile('../jsn.json', JSON.stringify(data), function() {
            fs.readFile('../jsn.json', 'utf-8', function(err, data) {
                console.log(data);
            });
        });



        this.setState({redirect: true});


    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/result" />;
        }
        return (
            <div>
                <h1>In progress..</h1>
                <Link to='/result'> Test Result</Link>
                {/*<button className='btn-primary' onClick={this.handleClick}>Send Link</button>*/}

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Input GitLab link:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Choose programming language
                        <select onChange={this.handlerCrawler}>
                            <option selected value="Java">Java</option>
                            <option value="C#">C#</option>
                        </select>
                    </label>
                    <input type="submit" value="Send Link"/>

                </form>

            </div>

        )
    }


}

export default TakeLink;

import React, {Component} from "react";
import ListOfCommits from "./ListOfCommits";
// import data from 'C:\\Users\\User\\Desktop\\react_home\\praktika\\srcjsn';
// import data from "../jsn.json"
import {Link} from 'react-router-dom'
import "../style/wrap.css"

class ProjectInfo extends Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){


    }
    render() {
        // const data = this.state.data;
        return (
            <div className="card">
                <div className="card-header">
                    <h2 >Current project info</h2>
                    <Link to='/'> Return</Link>
                </div>
                <div className="card-body card-text">
                    <h4 className="">Name: {data.name}</h4>
                    <h4>description: {data.description}</h4>
                    <h4>web_url: {data.web_url}</h4>
                    <h4>avatar_url: {data.avatar_url}</h4>
                    <h4>created_at: {data.created_at}</h4>
                    <ListOfCommits commits={data.commits}/>
                </div>

            </div>

        )
    }


}

export default ProjectInfo;