import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import Avatar from './Avatar'

//STYLING
const SmallGrid = withStyles(theme => ({
    root: {
        border: '1px solid rgba(0, 0, 0, 0.12)', 
        paddingLeft: '28px', borderRadius: '4px', 
        width: '100%',
    }
}))(Grid)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////                                            REACT COMPONENTS                                                   /////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//SmallAgentListing component
const SmallAgentListing = ({ agent, showAvatarOnly }) => {
    const [showName, setShowName] = React.useState(!showAvatarOnly || false)

    return(
        <Grid 
            style={{ position: 'relative' }} 
            item 
            alignItems="center" 
            container
            onMouseOver={() => setShowName(true)}
            onMouseOut={() => setShowName(!showAvatarOnly)}
        >
            <Avatar size='small' backgroundColor={agent.color}>
                {agent.name[0]}
            </Avatar>
            <Slide
                mountOnEnter
                unmountOnExit
                in={showName}
                direction="right"
            >
                <SmallGrid item>
                    <Typography variant="subtitle1">
                        <strong>{agent.name}</strong>
                    </Typography>
                </SmallGrid>
            </Slide>
        </Grid>
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