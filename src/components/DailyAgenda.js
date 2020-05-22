import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MuiPaper from '@material-ui/core/Paper'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AgentListing from './AgentListing'
import Hours, { HourSpot } from './Hours'
import getHours from 'date-fns/getHours'
import getMinutes from 'date-fns/getMinutes'
import parseISO from 'date-fns/parseISO'

//STYLING
const Paper = withStyles(theme => ({
    root: {
        width: theme.spacing(60)
    }
}))(MuiPaper)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////                                            REACT COMPONENTS                                                   /////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Appointment
const Appointment = ({appointment, xs}) => {
    const [mTop] = React.useState(Math.floor(getMinutes(parseISO(appointment.appt_time)) / 15 % 4) * 7)

    if (appointment.agents.length > 1) return (
        <Grid style={{ marginTop: `${mTop}px` }} item xs={xs}>
            <AvatarGroup max={4}>
                {appointment.agents.map(agent => 
                    <Avatar style={{ backgroundColor: agent.color }} key={agent.code}>
                        {agent.name[0]}
                    </Avatar>)}
            </AvatarGroup>
        </Grid>
        
    )

    return(
        <Grid style={{ marginTop: `${mTop}px` }} item xs={xs}>
            <AgentListing size="small" agent={appointment.agents[0]} />
        </Grid>
    )
}

const initSpots = () => {
    const ret = []
    for(var i = 0; i < 14; i++){
        ret[i] = {
            appointments: [],
            hour: i + 7
        }
    }
    return ret
}

const Spots = ({ appointments }) => {
    const spots = initSpots()
    appointments.forEach(appt => spots[getHours(parseISO(appt.appt_time)) - 7].appointments.push(appt))

    return(
        <React.Fragment>
            {spots.map(spot => 
                <HourSpot key={spot.hour}>
                    {spot.appointments.map((appt, i) => <Appointment key={i} appointment={appt} />)}
                </HourSpot>)
            }
        </React.Fragment>
    )
}
            
//DailyAgenda Component
const DailyAgenda = ({ title, appointments }) => {
    return(
        <Paper elevation={3}>
            <Typography align="center" variant="h4">
                {title}
            </Typography>
            <Grid style={{ marginTop: '20px', width: '101%' }} container spacing={2}>
                <Hours />
                <Grid direction="column" container item xs={9}>
                    <Spots appointments={appointments} />
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