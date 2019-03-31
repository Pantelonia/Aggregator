import React, {Component} from "react";
import { Route, Switch} from 'react-router-dom';

import ProjectInfo from './ProjectInfo';
import TakeLink from "./TakeLink";

class App extends Component{
render(){
    return(
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
export default App