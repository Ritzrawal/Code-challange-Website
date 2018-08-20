import React, { Component } from 'react';
export default class SystemInfo extends Component{
    constructor(){
        super();
        this.state={
            system:[]
        }
    }
componentDidMount(){
    return fetch('https://api.judge0.com/system_info',{
        headers:{
        'Content-Type': 'application/json'
        },  
    }).then((response)=>response.json())
    .then((data)=>{
        this.setState({
            system: data
        })
    })
}
    render(){
        return(
          <div>
              {
                  Object.entries(this.state.system).map(([key,value],i)=>{
                      return(
                          <div key={key}>
                          {key}:{value}
                          </div>
                      )
                  }
                )
              }
            </div>
        )
    }
}