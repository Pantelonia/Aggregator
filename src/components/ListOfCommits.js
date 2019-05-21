import React, {Component} from 'react'
import Commit from "./Commit";
import "../style/CustomlistElement.css"

export default class ListOfCommits extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render() {
        const commitElements = this.state.isOpen && this.props.commits.map(commit =>
            <li key={commit.id} className="CustomlistElement">
                <Commit commit={commit}/>
            </li>)

        return (
            <div>
                <h2>Commits
                    <button className="btn-primary btn-lg float-right" onClick={this.handleClick}>
                        {this.state.isOpen ? 'Close' : 'Open'}
                    </button>
                </h2>

                <ul style={{margin: '30px'}}>
                    {commitElements}
                </ul>
            </div>
        )

    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}