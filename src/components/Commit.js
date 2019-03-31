import React,{Component} from 'react'
import ListOfDiffs from './ListofDiffs'

class Commit extends Component{
render(){
    const {commit} = this.props
    return(<div className="list-group-item" style={{margin: '30px'}} >
            <h2>{commit.title}</h2>
            <div>
                <h5>Project_id:{commit.project_id}</h5>
                <h5>Autor:{commit.author_name}</h5>
                <h5>Message:{commit.message}</h5>
                <h5>Branches:{commit.branches!= null ? commit.branches : 'Not specified'}</h5>
                <h5>Сreated at:{commit.created_at}</h5>
                <h2>
                    <ListOfDiffs diffs ={commit.diffs}/>
                </h2>
            </div>





        </div>
       )
}
}
export default Commit