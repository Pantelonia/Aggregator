import React,{Component} from 'react'
import ListOfDiffs from './ListofDiffs'

class Commit extends Component{
render(){
    const {commit} = this.props
    return(<div className="list-group-item" style={{margin: '30px'}} >
            <h2>{commit.title}</h2>
            <div style={{textAlign: "left"}}>
                <h5>Commit Autor:{commit.author_name}</h5>
                <h5>Commit Message:</h5>
                <div>{commit.message}</div>
                <h5>Affected Branches:{commit.branches!= null ? commit.branches : 'Not specified'}</h5>
                <h5>Сreated at:{commit.created_at.substr(0,10)}</h5>
                <h2>
                    <ListOfDiffs diffs ={commit.diffs}/>
                </h2>
            </div>





        </div>
       )
}
}
export default Commit