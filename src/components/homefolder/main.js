import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';
import ForCompanies from './forcompanies';
import SignUp from './signup';
import LogIn from './login';
import ForDevelopers from './fordevelopers';
import Dashboard from '../pages/dashboard';
import Challenge from '../pages/challenge';
import History from '../pages/history';
import Profile from '../pages/profile';
import Account from '../pages/account';
import Layout from '../pages/Layout';
import AddChallenge from '../recruiter/addchallenge';
import ChallengeList from '../recruiter/challengelist';
import AdminMenu from '../recruiter/adminmenu';
import Assesment from '../recruiter/assesment';
import RProfile from '../recruiter/recruiterProfile';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faCogs,faBars,faPlus,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import ViewSubmission from '../pages/viewSubmission';
import Error from '../Error.js';
import Result from '../recruiter/result';


library.add(faCogs);
library.add(faBars);
library.add(faPlus);
library.add(faTrash);
library.add(faEdit);

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/forcompanies" component={ForCompanies} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LogIn} />
    <Route path="/fordevelopers" component={ForDevelopers} />
    <Route path="/layout" render={props => <Layout {...props} />} />
    <Route path="/dashboard" render={props => <Dashboard {...props} />} />
    <Route path="/challenge" render={props => <Challenge {...props} />} />
    <Route path="/history" render={props => <History {...props} />} />
    <Route path="/profile" render={props => <Profile {...props} />} />
    <Route path="/myaccount" render={props => <Account {...props} />} />
    <Route path="/addchallenge" render={props => <AddChallenge {...props} />} />
    <Route path="/challengeslist" render={props => <ChallengeList {...props} />} />
    <Route path="/result" render={props => <Result {...props} />} />
    <Route path="/adminmenu" render={props => <AdminMenu {...props} />} />
    <Route path="/assesment" render={props => <Assesment {...props} />} />
    <Route path="/viewSubmission" render={props => <ViewSubmission {...props} />} />
    <Route path="/recruiterProfile" render={props => <RProfile {...props} />} />
    <Route path="*" component={Error} />
  </Switch>
)

export default Main;