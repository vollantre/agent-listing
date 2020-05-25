import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'
import Typography from '@material-ui/core/Typography'
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
const SmallAgentListing = ({ agent, highlightenedAgent, handleClick }) => {
    const [showName, setShowName] = React.useState(false)

    const showNameWhenTrue = { display: showName ? '' : 'none' }

    return(
        <Grid 
            style={{ position: 'relative', zIndex: (showName ? 2 : 0) }} 
            item 
            alignItems="center" 
            container
            onClick={handleClick}
            onMouseOver={() => setShowName(true)}
            onMouseOut={() => setShowName(false)}
        >
            <Avatar 
                size='small' 
                backgroundColor={agent.color}
                isHighlightened={agent._id === highlightenedAgent}
            >
                {agent.name[0]}
            </Avatar>
                <SmallGrid style={showNameWhenTrue} item>
                    <Typography variant="subtitle1">
                        <strong>{agent.name}</strong>
                    </Typography>
                </SmallGrid>
        </Grid>
    )
}

//MediumAgentListing component
const MediumAgentListing = ({ agent }) => {
    const [showPhoneInfo, setShowPhoneInfo] = React.useState(false)
    const [showEmailInfo, setShowEmailInfo] = React.useState(false)
    const [showPhoneButton] = React.useState(agent.phone !== undefined && agent.phone.length > 0)
    const [showEmailButton] = React.useState(agent.email !== undefined && agent.email.length > 0)

    const showWhenVisible = (visible) => ({ display: visible ? '' : 'none' })

    const handlePhoneInfoOnClick = () => {
        showEmailInfo && setShowEmailInfo(false)
        setShowPhoneInfo(!showPhoneInfo)
    }

    const handleEmailInfoOnClick = () => {
        showPhoneInfo && setShowPhoneInfo(false)
        setShowEmailInfo(!showEmailInfo)
    }

    return(
        <Grid 
            style={
                { 
                    width: '350px',
                    padding: '5px',
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 0, 0, 0.12)'
                }
            } 
            container
        >
            <Grid item container xs={6}>
                <Avatar 
                    backgroundColor={agent.color} 
                    badgeContent='TA'
                >
                    {agent.name[0]}
                </Avatar>
                <Typography variant="subtitle1">
                    <strong>{agent.name}</strong>
                    <br />
                    {agent.code}
                </Typography>
            </Grid>
            <Grid 
                style={{ flexWrap: 'nowrap' }} 
                item
                xs={6} 
                container 
                alignItems="flex-end" 
                justify="flex-end"
            >
                <IconButton 
                    style={showWhenVisible(showPhoneButton)} 
                    onClick={handlePhoneInfoOnClick} 
                    size="small"
                >
                    <Phone />
                    <Typography 
                        style={showWhenVisible(showPhoneInfo)} 
                        variant="body1"
                    >
                        {agent.phone}
                    </Typography>
                </IconButton>
                <IconButton 
                    style={showWhenVisible(showEmailButton)}
                    onClick={handleEmailInfoOnClick} 
                    size="small"
                >
                    <Email />
                    <Typography 
                        style={showWhenVisible(showEmailInfo)} 
                        variant="body1"
                    >
                        {agent.email}
                    </Typography>
                </IconButton>
            </Grid>
        </Grid>
    )
}
        

//AgentListing component
const AgentListing = ({ agent, size, highlightenedAgent, handleClick }) => {

    if(size === 'small') return <SmallAgentListing 
                                    agent={agent}
                                    highlightenedAgent={highlightenedAgent}
                                    handleClick={handleClick}
                                    />

    return <MediumAgentListing agent={agent} />
}

AgentListing.propTypes = {
    size: PropTypes.string,
    agent: PropTypes.object.isRequired,
    showAvatarOnly: PropTypes.bool,
    highlightenedAgent: PropTypes.number
}

export default AgentListing