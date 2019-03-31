import React,{Component} from 'react'

class Diff extends Component{
render(){
const {diff} = this.props
return(
    <div>
        <h4>Old_path:{diff.old_path}</h4>
        <h4>New_path:{diff.new_path}</h4>
        <h4>New_file:{diff.new_file.toString()}</h4>
        <h4>Renamed_file:{diff.renamed_file.toString()}</h4>
        <h4>deleted_file:{diff.deleted_file.toString()}</h4>
        <h4>Commit_id:{diff.commit_id}</h4>
        <h4>{diff.diff}</h4>
    </div>

)
}

}
export default Diff