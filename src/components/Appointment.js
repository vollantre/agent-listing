import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MuiPopover from '@material-ui/core/Popover'
import Grid from '@material-ui/core/Grid'
import getMinutes from 'date-fns/getMinutes'
import parseISO from 'date-fns/parseISO'
import AgentListing from './AgentListing'
import AppointmentDetail from './AppointmentDetail'

const Popover = withStyles(theme => ({
    paper: {
        overflow: 'inherit'
    }
}))(MuiPopover)

//Appointment
const Appointment = ({appointment, xs, highlightenedAgent}) => {
    const [mTop] = React.useState(Math.floor(getMinutes(parseISO(appointment.appt_time)) / 15 % 4) * 7)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (e) => setAnchorEl(e.currentTarget)

    return (
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
                    handleClick={handleClick}
                />
            </Grid>
            )}
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <AppointmentDetail appointment={appointment} />
            </Popover>
        </Grid>
    )
}

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    xs: PropTypes.number.isRequired,
    highlightenedAgent: PropTypes.number
}

export default Appointment