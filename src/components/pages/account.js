import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dash from './dash';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class Account extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
            <Dash/>
            <div className="margin-top-50">
                <div className="container">
                    <div className="row legend">
                        <span>My Account</span>
                    </div>
                    <div className="row">
                        <div className="container">
                            <form className={classes.container} noValidate autoComplete="off">
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <TextField
                                            label="User Name"
                                            id="margin-normal"
                                            className={classes.textField}
                                            fullwidth
                                            margin="normal"
                                        /></div>
                                    <div className="form-group col-md-4">
                                        <TextField
                                            label="Password"
                                            id="margin-normal"
                                            className={classes.textField}
                                            fullwidth
                                            margin="normal"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
            </div>
        )
    }
};

Account.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Account);
