import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import RecDash from './rDash';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#39424e !important",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});
class Assesment extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div >
                <RecDash />
                <div className="margin-top-50">
                    <div className="container">
                        <div className="row legend">
                            <span>Your Assesment Details</span>
                        </div>
                        <div class="row">
                            <div className="action-panel">
                                <Link to="UrlGenerator"><button className="btn btn-outline-dark">
                                    <FontAwesomeIcon icon="plus" className="fa-1x" /></button></Link>

                                <button className="btn btn-outline-dark">
                                    <FontAwesomeIcon icon="trash" className="fa-1x" /></button>
                            </div>
                        </div>
                        <div className="row">
                            <Paper className={classes.root}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <CustomTableCell>Select To Activate</CustomTableCell>
                                            <CustomTableCell>Assesment Name</CustomTableCell>
                                            <CustomTableCell>Date Added</CustomTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        <TableRow className={classes.row}>
                                            <CustomTableCell>
                                                <input type="checkbox" />
                                            </CustomTableCell>
                                            <CustomTableCell>
                                                <ExpansionPanel>
                                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                        <Typography className={classes.heading}>Assesment-No.</Typography>
                                                    </ExpansionPanelSummary>
                                                    <ExpansionPanelDetails>
                                                        <Typography style={{marginLeft:'15px'}}>
                                                           1.  List of Questions Addded 
                                     </Typography>
                                                    </ExpansionPanelDetails>
                                                    <div class="float-right my-2 mr-3">
                                                        {/* Link to generate UID , so that we can pass this UID and students can take the test after hitting the link */}

                                                    </div>
                                                </ExpansionPanel>

                                            </CustomTableCell>
                                            <CustomTableCell> </CustomTableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </Paper>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

Assesment.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Assesment);