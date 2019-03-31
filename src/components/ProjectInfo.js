import React, {Component} from "react";
import ListOfCommits from "./ListOfCommits";
import data from '../projectData';
import {Link} from 'react-router-dom'



class ProjectInfo extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        // const {data} = this.props
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