import React, {Component} from "react";
import {Link} from 'react-router-dom'
import axios from 'axios';

class TakeLink extends Component {


    constructor(props) {
        super(props)
        this.state  = {value:''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleClick() {
        axios.get('http://localhost:8080/takeLink/hi')
        console.log('check');
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(){
        var link = this.state.value;
        axios.get('http://localhost:8080/takeLink/'+link)
    }

    render() {
        return (
            <div>
                <h1>In progress..</h1>
                <Link to='/result'> Test Result</Link>
                {/*<button className='btn-primary' onClick={this.handleClick}>Send Link</button>*/}

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Input gitHub link:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Send Link"/>

                </form>

            </div>

        )
    }


}

export default TakeLink;