import React, { Component } from 'react';
import './App.css';
import Main from './components/homefolder/main';
import Sidebar from './components/homefolder/sidebar';
import Particles from 'react-particles-js';

const particleOpt={
    particles:{
        number:{
            value:150,
            density:{
                enable:true,
                value_area:800
            }
        },
        color:{
            value:"#b61924"
        }
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Main />
                <Particles 
              params={particleOpt}/>
            </div>
        );
    }
}
export default App;