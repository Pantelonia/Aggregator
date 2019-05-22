import React, {Component} from 'react'
import Diff from "./Diff";

export default class ListofDiffs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render() {
        const diffElements = this.state.isOpen && this.props.diffs.map(diff =>
            <li key={diff.id}>
                <Diff diff={diff}/>
            </li>)

        return (
            <div>
                <h4 style={{color: "blue"}} onClick={this.handleClick}>Diffs
                    {/*<button className="btn-primary"  onClick={this.handleClick}>*/}
                        {/*{this.state.isOpen ? 'Close' : 'Open'}*/}
                    {/*</button>*/}
                </h4>

                <ul>
                    {diffElements}
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