import React, { Component } from 'react';
import Dash from './dash';
export default class ViewSubmission extends Component {
    render() {
        return (
            <div>
                <Dash />
                <div>{this.props.location}</div>
            </div>
        )
    }
}