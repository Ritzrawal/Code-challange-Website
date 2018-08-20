import React, { Component } from 'react';
import './style.css';

export default class SelectLanguage extends Component {
    constructor(props) {
        super(props);

        this.state = {

            data: [],
            selectedValue: 'C'
        };
        this.selectHandler = this.selectHandler.bind(this);
    }

    selectHandler(ev) {
        this.setState({
            selectedValue: ev.target.value
        });
    }


    componentDidMount() {
        fetch('https://api.judge0.com/languages', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }

        }).then((response) => response.json())
            .then((result) => {

                this.setState({
                    data: result,

                });
            }).catch(err => {
                alert(err);
            });

    }


    render() {

        return (
            <div>

                <select>

                    {
                        this.state.data.map((value, i) =>
                            <option key={value.id}>
                                {value.name}</option>
                        )
                    }
                </select>


            </div>
        )
    }
}