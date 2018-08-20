import React, { Component } from 'react';
import './style.css';

class CreateSubmission extends Component {
    constructor(props) {
        super(props);

        this.state = {
            source_code: "",
            language_id: 4,
            stdin: '',
            expected_output: '',
            data: [],
            language: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sourceCode = this.sourceCode.bind(this);
        this.languageId = this.languageId.bind(this);
        this.stdin = this.stdin.bind(this);
        this.expected_output = this.expected_output.bind(this);
    }

    stdin(ev) {
        this.setState({ stdin: ev.target.value });
    }

    expected_output(ev) {
        this.setState({
            expected_output: ev.target.value
        });
    }

    sourceCode(event) {
        this.setState({
            source_code: event.target.value
        });
    }

    componentDidMount() {
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
        debugger
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
        debugger
        event.preventDefault();
        const { source_code, language_id, stdin, expected_output } = this.state;

        // for (var i = 0; i < stdin.length; i++) {

        fetch('https://api.judge0.com/submissions/?wait=true', {
            method: 'POST',
            body: JSON.stringify({
                source_code,
                language_id,
                stdin,
                expected_output
            }),
            headers: { 'Content-Type': 'application/json' }

        }).then((response) => response.json())
            .then((result) => {

                this.setState({
                    data: result,

                });
            }).catch(err => {
                alert(err);
            });
        // }
    }

    render() {
        return (
            <div className="CreateComponent">
                <form onSubmit={this.handleSubmit}>
                    <select onChange={this.languageId} className='language'>
                        {
                            this.state.language.map((value, i) =>
                                <option key={i} value={value.id}>{value.name}</option>
                            )
                        }
                    </select>

                    <textarea name="sourceCode" className='text-area' value={this.state.sourceCode} onChange={this.sourceCode}></textarea>
                    <button className='submit'>Submit</button><br />

                    <input value={this.state.stdin} onChange={this.stdin} className='stdin' placeholder="stdin" /><br />
                    <input value={this.state.data.stdout} className='stdin' onChange={this.expected_output} placeholder="expected_output" /><br />

                    <div className="output">

                        {/* {Object.keys(this.state.data).map((key)=>{return "<div>"+this.state.data[key]+"</div>";})} */}

                        <p>Output: {this.state.data.stdout}</p>
                        <p>Status: {this.state.data.status && this.state.data.status.description ? this.state.data.status.description : null}</p>
                        <p>Time: {this.state.data.time}</p>
                        {/* <p>Compile_output:{this.state.compile_output}</p> */}
                        <p>ErrorMessage:  {this.state.data.stderr}</p>
                        {/* <p>message: {this.state.data.message}</p>
                        <p>{this.state.data.exit_code}</p>
                        <p>signal:{this.state.data.exit_signal}</p>
                        <p>date:{this.state.data.created_at}</p>
                        <p>date1:{this.state.data.finished_at}</p>
                        <p>wtime:{this.state.data.wall_time}</p>
                        <p>memory:{this.state.data.memory}</p> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateSubmission;