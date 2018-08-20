import React, { Component } from 'react';
import {Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';  


export default class Sidebar extends Component{
    render(){
        return (  
    <div>
    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">C/. Code Challange</Link>}>
<Navigation>
  <Link to="/fordevelopers">For Developers</Link>
  <Link to="/forcompanies">For Companies</Link>
  <Link to="/login">Log In</Link>
  <Link to="/signup">Sign Up</Link>
</Navigation>
      </Drawer>
     </div>
        );
    }
}