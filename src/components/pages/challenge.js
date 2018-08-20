import PropTypes from 'prop-types';
import Dash from './dash';
import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import './style.css';

class Challenge extends Component {
    constructor(props) {
        super(props);

        this.state = {
            source_code: "",
            language_id: 4,
            stdin: '',
            expected_output: '',
            data: [],
            language: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.sourceCode = this.sourceCode.bind(this);
        this.languageId = this.languageId.bind(this);
        // this.stdin = this.stdin.bind(this);
        // this.expected_output = this.expected_output.bind(this);
    }

    // stdin(ev) {
    //     this.setState({ stdin: ev.target.value });
    // }

    // expected_output(ev) {
    //     this.setState({
    //         expected_output: ev.target.value
    //     });
    // }

    sourceCode(event) {
        this.setState({
            source_code: event.target.value
        });
    }

    componentDidMount() {
        var code = document.getElementById("text-area");
        debugger;
        var editor = window.CodeMirror.fromTextArea(code, {
            lineNumbers : true
        });
        fetch('https://api.judge0.com/languages', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => response.json())
            .then((result) => {
                this.setState({
                    language: result,
                });
            }).catch(err => {
                alert(err);
            });
    }

    languageId(event) {
        this.setState({
            language_id: event.target.value
        });
    }
    // languageId(id){

    //       this.setState({ language_id: [...this.state.language_id, id] });
    //     } 


    //   function(response){
    //     var resultFound = false;

    //         if(falsecondtion){
    //             resultFound=false;
    //         }else{
    //             resultFound=true;
    //         }


    //   }
    // }).then(function (response) {
    //     var json = response.json();
    //     return json;
    // })

    handleSubmit(event) {
        event.preventDefault();
        const { source_code, language_id, expected_output } = this.state;
        fetch('https://api.judge0.com/submissions/?wait=true', {
            method: 'POST',
            body: JSON.stringify({
                source_code,
                language_id,
                stdin: this.props.location.state.stdin,
                expected_output
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => response.json())
            .then((result) => {
                this.setState({
                    data: result
                });
            }).catch(err => {
                alert(err);
            });
    }

    setSubmission() {
        const { question } = this.props.location.state;
        var submissionResult = {
            question: question.question,
            code: this.state.source_code,
            score: 10
        }

        fetch("http://localhost:9000/api/submission", {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(submissionResult),
            headers: { 'Content-Type': 'application/json' }
        }).catch(err => {
            alert(err);
        })
    }

    render() {
        const { question } = this.props.location.state;
        return (
            <div>
                <Dash />
                <div className="CreateComponent">
                    <form onSubmit={this.handleSubmit}>
                        <select onChange={this.languageId} className='language'>
                            {
                                this.state.language.map((value, i) =>
                                    <option key={i} value={value.id}>{value.name}</option>
                                )
                            }
                        </select>

                        <textarea name="sourceCode" className='text-area' id="text-area" value={this.state.sourceCode} onChange={this.sourceCode}></textarea><br/><br/>
                        <br />
                        <button className='submit'>Run</button><br />

                        <input value={question.stdin} className='stdin' placeholder="stdin" /><br />
                        <input value={question.stdout} className='stdin' placeholder="expected_output" /><br />
                        <Link to={{ pathname: 'viewSubmission', state: { question } }}><button onClick={this.setSubmission.bind(this)}>Submit</button></Link>
                    </form>
                    <div className="output">
                        <p>Output: {this.state.data.stdout}</p>
                        <p>Status: {this.state.data.status && this.state.data.status.description ? this.state.data.status.description : null}</p>
                        <p>Time: {this.state.data.time}</p>
                        <p>ErrorMessage:  {this.state.data.stderr}</p>

                    </div>

                </div>
            </div>
        )

    }
}

export default Challenge;
Challenge.propTypes = {
    classes: PropTypes.object.isRequired,
};