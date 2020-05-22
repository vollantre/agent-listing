import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { HourGrid } from './StyledComponents'

//HourSpot
export const HourSpot = ({ children }) => (
    <HourGrid style={{ position: 'relative' }} item container>
        <Grid style={{ position: 'absolute' }} container item>
            {children.map(child => React.cloneElement(child, { xs: children.length > 1 ? (12 / children.length) : 8 }))}
        </Grid>
    </HourGrid>
)

//Hour component
const Hour = ({ hour }) => (
    <HourGrid container justify="flex-end" alignItems="center" item xs={12}>
        <Typography variant="body1">
            {hour.slice(0,5)} <Typography variant="caption">{hour.substr(-2)}</Typography>
        </Typography>
    </HourGrid>
)

//Hours components
const Hours = () => (
    <Grid container item xs={3}>
        <Hour hour="7:00 am" />
        <Hour hour="8:00 am" />
        <Hour hour="9:00 am" />
        <Hour hour="10:00 am" />
        <Hour hour="11:00 am" />
        <Hour hour="12:00 pm" />
        <Hour hour="1:00 pm" />
        <Hour hour="2:00 pm" />
        <Hour hour="3:00 pm" />
        <Hour hour="4:00 pm" />
        <Hour hour="5:00 pm" />
        <Hour hour="6:00 pm" />
        <Hour hour="7:00 pm" />
        <Hour hour="8:00 pm" />
    </Grid>
)

export default Hours