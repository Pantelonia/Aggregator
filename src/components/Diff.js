import React,{Component} from 'react'

class Diff extends Component{
render(){
const {diff} = this.props
return(
    <div>
        <h4>OldPath:{diff.oldPath}</h4>
        <h4>NewPath:{diff.newPath}</h4>
        <h4>NewFile:{diff.newFile.toString()}</h4>
        <h4>RenamedFile:{diff.renamedFile.toString()}</h4>
        <h4>deletedFile:{diff.deletedFile.toString()}</h4>
        <h4>Commit_id:{diff.commitId}</h4>
        <h4>{diff.diff}</h4>
    </div>

)
}

}
export default Diff