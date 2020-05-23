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
        minWidth: '175px',
        backgroundColor: 'white'
    }
}))(Grid)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////                                            REACT COMPONENTS                                                   /////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//SmallAgentListing component
const SmallAgentListing = ({ agent, showAvatarOnly }) => {
    const [showName, setShowName] = React.useState(!showAvatarOnly || false)

    const showNameWhenTrue = { display: showName ? '' : 'none' }

    return(
        <Grid 
            style={{ position: 'relative', zIndex: (showName ? 2 : 0) }} 
            item 
            alignItems="center" 
            container
            onMouseOver={() => setShowName(true)}
            onMouseOut={() => setShowName(!showAvatarOnly)}
        >
            <Avatar size='small' backgroundColor={agent.color}>
                {agent.name[0]}
            </Avatar>
            <div style={showNameWhenTrue}>
                <SmallGrid item>
                    <Typography variant="subtitle1">
                        <strong>{agent.name}</strong>
                    </Typography>
                </SmallGrid>
            </div>
        </Grid>
    )
}

//MediumAgentListing component
const MediumAgentListing = ({ agent }) => {
    const [showPhone, setShowPhone] = React.useState(false)
    const [showEmail, setShowEmail] = React.useState(false)

    const showWhenVisible = (visible) => ({ display: visible ? '' : 'none' })

    const handlePhoneOnClick = () => {
        showEmail && setShowEmail(false)
        setShowPhone(!showPhone)
    }

    const handleEmailOnClick = () => {
        showPhone && setShowPhone(false)
        setShowEmail(!showEmail)
    }

    return(
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
            <Grid style={{ flexWrap: 'nowrap' }} item xs={6} container alignItems="flex-end" justify="flex-end">
                <IconButton onClick={handlePhoneOnClick} size="small">
                    <Phone />
                    <Typography style={showWhenVisible(showPhone)} variant="body1">
                        {agent.phone}
                    </Typography>
                </IconButton>
                <IconButton onClick={handleEmailOnClick} size="small">
                    <Email />
                    <Typography style={showWhenVisible(showEmail)} variant="body1">
                        {agent.email}
                    </Typography>
                </IconButton>
            </Grid>
        </Grid>
    )
}
        

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