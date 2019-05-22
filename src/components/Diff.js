import React, {Component} from 'react'

class Diff extends Component {
    render() {
        const {diff} = this.props
        return (
            <div>
                <div style={{textAlign: "left"}}>
                    <h4>Old Path : {diff.oldPath}</h4>
                    <h4>New Path : {diff.newPath}</h4>
                    <h4>New File : {diff.newFile.toString()}</h4>
                    <h4>Renamed File : {diff.renamedFile.toString()}</h4>
                    <h4>Deleted File : {diff.deletedFile.toString()}</h4>
                </div>
                <h4>Commit_id : {diff.commitId}</h4>
                <br/>
                <div style={{border: "2px solid black"}}>
                    <h4>Diff info</h4>
                    <h4>{diff.diff}</h4>
                </div>
            </div>

        )
    }

}

export default Diff