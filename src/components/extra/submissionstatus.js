import React, { Component } from 'react';
import CreateSubmission from './createsubmission';

export default class SubmissionStatus extends Component{



    constructor(){
     super();
     this.state={
         status:[]
     };
    }


    componentDidMount(){
        return fetch("https://api.judge0.com/statuses", {
           headers: {'Content-Type':'application/json'}
        }).then((response)=>response.json())
        .then((result)=>{
            this.setState({
                status:result
            });
        });
    }

    render(){
        return(



            <div>
                <CreateSubmission status={this.state.status}/>
                <p>

              
              {
                        this.state.status.map((value, i) =>
                            <option key={value.id}>
                            <p>{value.id}: </p>
                            <p> {value.description}</p>
                                </option>
                                
                        )
                    }
                    </p>
            </div>
        )
    }
}
