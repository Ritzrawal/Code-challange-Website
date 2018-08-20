import React from 'react';
import { Link } from 'react-router-dom';
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

const Error = () => (
  <div>
    <h2>Page not found</h2>
   
    <Link to="/">Home</Link>
    <Particles 
              params={particleOpt}/>
    </div>
 
);

export default Error;