import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import RecDash from './rDash';

export default class AdminMenu extends React.Component {
    render() {
        return (
            <div className="mx-auto">
            <RecDash/>
                <div className="container" style={{marginLeft: '230px', marginTop: '120px'}}>
                    <div className="row justify-content-md-center">
                        <div className="col-md-3">
                            <Link to="assesment"><button className="btn-panel">
                                <FontAwesomeIcon icon="cogs" className="fa-3x margin-bottom-10" /><br /><br />
                                <span className="btn-label">assessment</span>
                            </button></Link>
                        </div>
                        <div className="col-md-3 ">
                        <Link to="addchallenge"><button className="btn-panel">
                                <FontAwesomeIcon icon="plus" className="fa-3x margin-bottom-10" /><br /><br />
                                <span className="btn-label">Add Challenge</span>
                            </button></Link>
                        </div>
                        <div className="col-md-3 ">
                        <Link to="challengeslist"><button className="btn-panel">
                                <FontAwesomeIcon icon="bars" className="fa-3x margin-bottom-10" /><br /><br />
                                <span className="btn-label">Result</span>
                            </button></Link>
                        </div>
                        <div className="col-md-3 ">
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
AdminMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};