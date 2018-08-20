import React, { Component } from 'react';
import './style.css';

export default class SubmissionResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
        
    }
    componentDidMount() {
        return  fetch('https://api.judge0.com/submissions/91b1b51c-136e-4973-9666-3fff52c0d30b?base64_encoded=false&fields=stdout,status,stderr,source_code,status_id,language_id', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then((response) => response.json())
            .then((data) => {

                this.setState({
                    data: data,
                });
            }).catch(err => { alert(err);
            });
        }
    
        render(){
            return(
             <div>

                        {/* {Object.keys(this.state.data).map((key)=>{return "<div>"+this.state.data[key]+"</div>";})} */}
                        <p>{this.state.data.source_code}</p>
                        <p>{this.state.data.stdout}</p>
                        <p>{this.state.data.status_id}</p>
                        <p>{this.state.data.status && this.state.data.status.description?this.state.data.status.description:null}</p>
                        



             </div>
            )
        }
    }
