import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import Dash from './dash';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            question: null,
            start: false
        }
        this.selectQues = this.selectQues.bind(this);
    }
    
    componentDidMount() {
        fetch("http://localhost:9000/api/questions"
        ).then((result) => {
            return result.json();
        }).then((resultJson) => {
            this.setState({ questions: resultJson });
        }).catch((err) => {
            console.log("err");
        });
    }

    selectQues(val) {
        this.setState({
            question: val,
            start: true
        })
    }



    render() {
        const { classes } = this.props;
        return (
            <div>
                <Dash />
                <div className="margin-top-50">
                    <div className="container">
                        <div className="row legend">
                            <span>Challenges</span>
                        </div>
                        <div className="row">
                            <div className={classes.root} >
                                {this.state.questions.map((value, i) =>
                                    <ExpansionPanel key={i}>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography >{i+1}.   {value.question}</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                <span style={{marginLeft:'20px'}}>{value.description}</span>
                                            </Typography>
                                        </ExpansionPanelDetails>
                                        <div class="float-right my-2 mr-3">
                                            <Link to={{ pathname: 'challenge', state: { question: value } }} ><button type="button" className="btn btn-outline-success" onClick={this.selectQues}>Start</button></Link>
                                        </div>
                                    </ExpansionPanel>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);