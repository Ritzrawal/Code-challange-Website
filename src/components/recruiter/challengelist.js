import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import RecDash from './rDash';
import { Button } from '@material-ui/core';

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



class ChallengeList extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div >
                <RecDash />
                <div className="margin-top-50">
                    <div className="container">
                        <div className="row legend">
                            <span>Challenges</span>
                        </div>
                        <div class="row">
                            <div className="action-panel">
                            </div>
                        </div>
                        <div className="row">
                            <Paper className={classes.root}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>

                                            <CustomTableCell>Assessment Name</CustomTableCell>
                                            <CustomTableCell>Date Added</CustomTableCell>
                                            <CustomTableCell>Result</CustomTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>


                                        <TableRow className={classes.row}>
                                            <CustomTableCell></CustomTableCell>
                                            <CustomTableCell></CustomTableCell>
                                            <Link to={{ pathname: 'Result' }}><CustomTableCell><Button>View</Button></CustomTableCell></Link>
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

ChallengeList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChallengeList);