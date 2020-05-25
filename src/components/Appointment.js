import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import getMinutes from 'date-fns/getMinutes'
import parseISO from 'date-fns/parseISO'
import AgentListing from './AgentListing'

//Appointment
const Appointment = ({appointment, xs, highlightenedAgent}) => {
    const [mTop] = React.useState(Math.floor(getMinutes(parseISO(appointment.appt_time)) / 15 % 4) * 7)

    if (appointment.agents.length > 1) return (
        <Grid 
            style={{ marginTop: `${mTop}px`, position: 'relative' }} 
            container 
            item 
            xs={xs}
        >
            {appointment.agents.map((agent, i) => 
            <Grid 
                style={{ position: 'absolute', left: `${i * 20}px` }} 
                item
                key={agent.code}
            >
                <AgentListing
                    highlightenedAgent={highlightenedAgent} 
                    size="small"
                    agent={agent}
                />
            </Grid>
                
            )}
        </Grid>
    )

    return(
        <Grid style={{ marginTop: `${mTop}px` }} item xs={xs}>
            <AgentListing 
                size="small" 
                agent={appointment.agents[0]} 
                highlightenedAgent={highlightenedAgent} 
            />
        </Grid>
    )
}

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    xs: PropTypes.number.isRequired,
    highlightenedAgent: PropTypes.number
}

export default Appointment