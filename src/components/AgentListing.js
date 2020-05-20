import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MuiCard from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'
import Typography from '@material-ui/core/Typography'
import MuiListItem from '@material-ui/core/ListItem'
import MuiListItemText from '@material-ui/core/ListItemText'
import MuiListSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from './Avatar'

//STYLING
const Card = withStyles(theme => ({
    root: {
        overflow: 'unset'
    }
}))(MuiCard)

const ListSecondaryAction = withStyles(theme => ({
    root: {
        top: '70%',
        right: '5px'
    }
}))(MuiListSecondaryAction)

const ListItem = withStyles(theme => ({
    root: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: '2px'
    }
}))(MuiListItem)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////                                            REACT COMPONENTS                                                   /////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SmallAgentListing component
const SmallAgentListing = ({ agent }) => 
    
        <Card variant="outlined">
            <Grid style={{ position: 'relative' }} item container xs={6}>
                <Avatar size='small' backgroundColor={agent.color}>
                    {agent.name[0]}
                </Avatar>
                <Grid>
                    <Typography variant="body1"><strong>{agent.name}</strong></Typography>
                </Grid>
            </Grid>
        </Card>
    

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
                <Typography>
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
const AgentListing = ({ agent, size }) => {

    if(size === 'small') return <SmallAgentListing agent={agent} />

    return <MediumAgentListing agent={agent} />
}

AgentListing.propTypes = {
    size: PropTypes.string,
    agent: PropTypes.object.isRequired
}

export default AgentListing