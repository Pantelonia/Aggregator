import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';

import axios from 'axios';

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
        // const jsonfile = data;
        // const file = '../projectData.json';
        // jsonfile.readFile(file)
        //     .then(obj => console.dir(obj))
        //     .catch(error => console.error(error));
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