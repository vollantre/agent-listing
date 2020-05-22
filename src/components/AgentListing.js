import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MuiCard from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'
import MuiAvatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Avatar from './Avatar'

//STYLING
const Card = withStyles(theme => ({
    root: {
        overflow: 'unset'
    }
}))(MuiCard)

const SmallGrid = withStyles(theme => ({
    root: {
        height: '26px',
        position: 'relative'
    }
}))(Grid)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////                                            REACT COMPONENTS                                                   /////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SmallAgentListing component
const SmallAgentListing = ({ agent, showAvatarOnly }) => {
    if(showAvatarOnly) return (
        <MuiAvatar>
            {agent.name[0]}
        </MuiAvatar>
    )

    return(
        <Card variant="outlined">
            <SmallGrid item alignItems="center" container>
                <Avatar size='small' backgroundColor={agent.color}>
                    {agent.name[0]}
                </Avatar>
                <Grid style={{ marginLeft: '15%' }} item>
                    <Typography variant="subtitle1"><strong>{agent.name}</strong></Typography>
                </Grid>
            </SmallGrid>
        </Card>
    )
}

//MediumAgentListing component
const MediumAgentListing = ({ agent }) => 
        <Grid 
            style={
                { 
                    width: '350px',
                    padding: '5px',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 0, 0, 0.12)'
                }
            } 
            container
        >
            <Grid item container xs={6}>
                <Avatar backgroundColor={agent.color} badgeContent='TA'>
                    {agent.name[0]}
                </Avatar>
                <Typography variant="subtitle1">
                    <strong>{agent.name}</strong>
                    <br />
                    {agent.code}
                </Typography>
            </Grid>
            <Grid item xs={6} container alignItems="flex-end" justify="flex-end">
                <IconButton size="small">
                    <Phone />
                </IconButton>
                <IconButton size="small">
                    <Email />
                </IconButton>
            </Grid>
        </Grid>

//AgentListing component
const AgentListing = ({ agent, size, showAvatarOnly }) => {

    if(size === 'small') return <SmallAgentListing showAvatarOnly={showAvatarOnly} agent={agent} />

    return <MediumAgentListing agent={agent} />
}

AgentListing.propTypes = {
    size: PropTypes.string,
    agent: PropTypes.object.isRequired,
    showAvatarOnly: PropTypes.bool
}

export default AgentListing