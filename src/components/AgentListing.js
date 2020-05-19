import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MuiCard from '@material-ui/core/Card'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'
import MuiListItem from '@material-ui/core/ListItem'
import MuiListItemText from '@material-ui/core/ListItemText'
import MuiListSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Slider from './Slider'
import Avatar from './Avatar'

//STYLING
const SmallListItemText = withStyles(theme => ({
    root: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(3)
    }
}))(MuiListItemText)

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
    
        <Card variant="outlined"><ListItem>
            <Avatar size='small' backgroundColor={agent.color}>
                {agent.name[0]}
            </Avatar>
            <SmallListItemText
                primary={<strong>{agent.name}</strong>}
            />
        </ListItem></Card>
    

//MediumAgentListing component
const MediumAgentListing = ({ agent, showEmail, showPhone, handleEmailReveal, handlePhoneReveal }) => 
    <Card variant="outlined" >
        <ListItem>
            <Avatar backgroundColor={agent.color} badgeContent='TA'>
                {agent.name[0]}
            </Avatar>
            <MuiListItemText    
                primary={<strong>{agent.name}</strong>}
                secondary={agent.code}
            />
            <ListSecondaryAction>
                <Slider 
                    icon={<Phone />} 
                    dataInfo={agent.phone} 
                    show={showPhone}
                    handleReveal={handlePhoneReveal}
                />
                <Slider  
                    icon={<Email />} 
                    dataInfo={agent.email}
                    show={showEmail}
                    handleReveal={handleEmailReveal}
                />
            </ListSecondaryAction>
        </ListItem>
    </Card>

//AgentListing component
const AgentListing = ({ agent, size }) => {
    const [showPhone, setShowPhone] = React.useState(false)
    const [showEmail, setShowEmail] = React.useState(false)

    const handlePhoneReveal = () => {
        showEmail && setShowEmail(false)
        setShowPhone(prev => !prev)
    }

    const handleEmailReveal = () => {
        showPhone && setShowPhone(false)
        setShowEmail(prev => !prev)
    }

    if(size === 'small') return <SmallAgentListing agent={agent} />

    return <MediumAgentListing 
                showEmail={showEmail}
                showPhone={showPhone}
                handleEmailReveal={handleEmailReveal}
                handlePhoneReveal={handlePhoneReveal}
                agent={agent}
            />
}

AgentListing.propTypes = {
    size: PropTypes.string,
    agent: PropTypes.object.isRequired
}

export default AgentListing