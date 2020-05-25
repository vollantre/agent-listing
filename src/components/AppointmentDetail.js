import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import AgentListing from './AgentListing'

const AppointmentDetail = ({ appointment }) => (
    <Grid 
        style={{
            width: '370px',
            borderRadius: '4px',
            border: '1px solid rgba(0, 0, 0, 0.12)',
            backgroundColor: 'white'
        }} 
        container
        direction="column"
        spacing={1}
    >
        <Grid item> 
            <Typography variant="body2">
                {format(parseISO(appointment.appt_time), 'h:mm aaaa')}
            </Typography>
        </Grid>
        {appointment.agents.map(agent => 
            <Grid key={agent.code} item>
                <AgentListing
                    size="medium"
                    agent={agent}
                />
            </Grid>
        )}
        <Grid item>
            <Typography variant="body2">
                Client:
                <Typography variant="h6" component="span">
                    <strong> {appointment.client}</strong>
                </Typography>
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="body2">
                Location:
                <Typography variant="h6" component="span">
                    <strong> {appointment.location}</strong>
                </Typography>
            </Typography>
        </Grid>
    </Grid>
)

export default AppointmentDetail