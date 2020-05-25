import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import getHours from 'date-fns/getHours'
import getMinutes from 'date-fns/getMinutes'
import parseISO from 'date-fns/parseISO'
import Appointment from './Appointment'
import { HourGrid } from './StyledComponents'

const HourSpot = ({ children }) => (
    <HourGrid style={{ position: 'relative' }} item container>
        <Grid style={{ position: 'absolute' }} container item>
            {children.map(child => React.cloneElement(child, { xs: children.length > 1 ? Math.floor(12 / children.length) : 8 }))}
        </Grid>
    </HourGrid>
)

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

const Spots = ({ appointments, highlightenedAgent }) => {
    const spots = initSpots()
    appointments.forEach(appt => spots[getHours(parseISO(appt.appt_time)) - 7].appointments.push(appt))

    const sortByMinutes = (a, b) => getMinutes(parseISO(a.appt_time)) - getMinutes(parseISO(b.appt_time))

    return(
        <React.Fragment>
            {spots.map(spot => 
                <HourSpot key={spot.hour}>
                    {spot.appointments.sort(sortByMinutes).map((appt, i) => 
                        <Appointment
                            highlightenedAgent={highlightenedAgent} 
                            key={i} 
                            appointment={appt}
                            xs={0}
                        />)
                    }
                </HourSpot>)
            }
        </React.Fragment>
    )
}

Spots.propTypes = {
    appointments: PropTypes.array.isRequired,
    highlightenedAgent: PropTypes.number
}

export default Spots