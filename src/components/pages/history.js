import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dash from './dash';
import { Button } from '../../../node_modules/@material-ui/core';
import { Link } from 'react-router-dom';


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

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        fetch("http://localhost:9000/api/submission"
        ).then((result) => {
            return result.json();
        }).then((resultJson) => {
            console.log("Then");
            console.log(resultJson);
            this.setState({ data: resultJson });
        }).catch((err) => {
        });
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                <Dash />
                <div className="margin-top-50">
                    <div className="container">
                        <div className="row legend">
                            <span>Challenges History</span>
                        </div>
                        <div className="row">
                            <Paper className={classes.root}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <CustomTableCell>Sr.</CustomTableCell>
                                            <CustomTableCell>Question</CustomTableCell>
                                            <CustomTableCell>Date</CustomTableCell>
                                            <CustomTableCell>Score</CustomTableCell>
                                            <CustomTableCell>View</CustomTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.data.map((submission, index) => {
                                            return (
                                                <TableRow className={classes.row} key={submission.id}>
                                                    <CustomTableCell>{index + 1}</CustomTableCell>
                                                    <CustomTableCell>{submission.question}</CustomTableCell>
                                                    <CustomTableCell>{submission.create_date}</CustomTableCell>
                                                    <CustomTableCell>{submission.score}</CustomTableCell>
                                                    <Link to={{ pathname: 'ViewSubmission', state: { question: submission } }}><CustomTableCell><Button>Show Details</Button></CustomTableCell></Link>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </div>
                    </div>
                </div>
             
            </div>
        )
    }
}

History.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(History);