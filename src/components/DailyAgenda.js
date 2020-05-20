import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MuiPaper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import MuiTypography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AgentListing from './AgentListing'

const Typography = withStyles(theme => ({
    h4: {
        color: '#3d3d3d',
        fontWeight: 'bold',
        paddingTop: '12px'
    },
    body1: {
        fontSize: '1.2rem',
        color: '#3d3d3d'
    }
}))(MuiTypography)

const Paper = withStyles(theme => ({
    root: {
        width: theme.spacing(60)
    }
}))(MuiPaper)

const Time = ({ hour }) => (
    <Grid item xs={12}>
        <Typography align="right" variant="body1">
            {hour.slice(0,5)} <Typography variant="caption">{hour.substr(-2)}</Typography>
        </Typography>
    </Grid>
)

const Times = () => (
    <Grid container item xs={3}>
        <Time hour="7:00 am" />
        <Time hour="8:00 am" />
        <Time hour="9:00 am" />
        <Time hour="10:00 am" />
        <Time hour="11:00 am" />
        <Time hour="12:00 pm" />
        <Time hour="1:00 pm" />
        <Time hour="2:00 pm" />
        <Time hour="3:00 pm" />
        <Time hour="4:00 pm" />
        <Time hour="5:00 pm" />
        <Time hour="6:00 pm" />
        <Time hour="7:00 pm" />
        <Time hour="8:00 pm" />
    </Grid>
)

const DailyAgenda = ({ title, appointments }) => {

    return(
        <Paper elevation={3}>
            <Typography align="center" variant="h4">
            {title}
            </Typography>
            <Grid style={{ marginTop: '20px' }} container spacing={3}>
                <Times />
                <Grid item xs={9}>
                    <AgentListing size="small" agent={appointments[0].agents[0]} />
                </Grid>
            </Grid>
        </Paper>
    )
    
}

DailyAgenda.propTypes = {
    title: PropTypes.string.isRequired,
    appointments: PropTypes.array
}

export default DailyAgenda