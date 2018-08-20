import React from 'react';
import PropTypes from 'prop-types';
import RecDash from './rDash';
import Dash from '../pages/dash';

export default class AddChallenge extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
  
            question: "",
            description: "",
            stdIn: "",
            stdOut: "",
            showQues: false
        }
        this.setQuestion = this.setQuestion.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setStdIn = this.setStdIn.bind(this);
        this.setStdOut = this.setStdOut.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
    }
    
    setQuestion(event) {
        var ques = event.target.value;
        this.setState({ question: ques });
    }

    setDescription(event) {
        var desc = event.target.value;
        this.setState({ description: desc });
    }

    setStdOut(event) {
        var stdOut = event.target.value;
        this.setState({ stdOut: stdOut });
    }

    setStdIn(event) {
        var stdIn = event.target.value;
        this.setState({ stdIn: stdIn });
    }

    addQuestion() {
        var question = {
            question: this.state.question,
            description: this.state.description,
            stdin: this.state.stdIn,
            stdout: this.state.stdOut
        }
        if (this.state.question.length > 0 && this.state.description.length > 0 && this.state.stdIn.length > 0 && this.state.stdOut.length > 0) {
            fetch("http://localhost:9000/api/questions", {
                method: 'POST',
                mode: "cors",
                body: JSON.stringify(question),
                headers: { 'Content-Type': 'application/json' }
            }).catch(err => {
                alert(err);
            })
        }

        else {
            alert("enter some values");
        }
    }

    render() {
       
        return (
            <div>
                <RecDash/>
                <div className="margin-top-50">
                    <Dash />
                    <div className="row"></div>
                </div>
                <div className="margin-top-50">
                    <div className="container">
                        <div className="row legend">
                            <div className="CreateComponent">
                                <form>
                                    <input type="text" className='stdin' value={this.state.question} onChange={this.setQuestion} placeholder="Add Challenge" />
                                    <input type="text" className='stdout' value={this.state.description} onChange={this.setDescription} placeholder="Add" />
                                    <input type="text" className='stdin' value={this.state.stdIn} onChange={this.setStdIn} placeholder="stdin" />
                                    <input type="text" className='stdout' value={this.state.stdOut} onChange={this.setStdOut} placeholder="stdout" />
                                    <button type="button" onClick={this.addQuestion} className="btn btn-outline-success">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
AddChallenge.propTypes = {
    classes: PropTypes.object.isRequired,
};